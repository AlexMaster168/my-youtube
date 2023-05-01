import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { Repository } from "typeorm";
import { AuthDto } from "./dto/auth.dto";
import * as bcrypt from "bcryptjs";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  async register(dto: RegisterDto): Promise<any> {
    await this.checkExistence(this.userRepo, "email", dto.email);
    await this.checkExistence(this.userRepo, "name", dto.name);
    const newUser = new User();
    newUser.email = dto.email;
    newUser.name = dto.name;
    newUser.password = await bcrypt.hash(dto.password, 10);
    const savedUser = await this.userRepo.save(newUser);
    const accessToken = this.generateAccessToken(savedUser.id);
    const refreshToken = this.generateRefreshToken(savedUser.id);
    await this.userRepo.update({ id: savedUser.id }, { refreshToken });
    const user = {
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email,
    };
    return {
      user,
      accessToken,
    };
  }

  async login(dto: AuthDto): Promise<any> {
    const existingUser = await this.userRepo.findOne({
      where: { email: dto.email },
    });
    if (!existingUser) {
      throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
    }
    const isPasswordMatching = await bcrypt.compare(
      dto.password,
      existingUser.password
    );
    if (!isPasswordMatching) {
      throw new HttpException("Неверный пароль", HttpStatus.UNAUTHORIZED);
    }
    const accessToken = this.generateAccessToken(existingUser.id);
    const refreshToken = this.generateRefreshToken(existingUser.id);
    await this.userRepo.update({ id: existingUser.id }, { refreshToken });
    const user = {
      id: existingUser.id,
      email: existingUser.email,
    };
    return {
      user,
      accessToken
    };
  }

  async refreshTokens(refreshToken: string): Promise<any> {
    try {
      const decoded = this.jwtService.verify(refreshToken);
      const user = await this.userRepo.findOne({
        where: {
          id: decoded.userId,
          refreshToken: refreshToken,
        },
      });
      if (!user)
        throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
      const accessToken = this.generateAccessToken(user.id);
      const newRefreshToken = this.generateRefreshToken(user.id);
      await this.userRepo.update(
        { id: user.id },
        { refreshToken: newRefreshToken }
      );
      return {
        accessToken,
        refreshToken: newRefreshToken,
      };
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        throw new HttpException(
          "Срок действия токена истек",
          HttpStatus.UNAUTHORIZED
        );
      }
      throw new HttpException(
        "Недействительный токен",
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  async checkExistence(repo, field, value) {
    const existingRecord = await repo.findOne({ where: { [field]: value } });
    if (existingRecord) {
      const errorMessage =
        field === "email"
          ? "Пользователь с таким адресом электронной почты уже зарегистрирован"
          : "Пользователь с таким именем уже зарегистрирован";
      throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
    }
  }

  generateAccessToken(userId: number): string {
    return this.jwtService.sign({ userId }, { expiresIn: "30m" });
  }

  generateRefreshToken(userId: number): string {
    return this.jwtService.sign({ userId }, { expiresIn: "7d" });
  }
}
