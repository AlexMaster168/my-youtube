import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getTypeOrmConfig = async (
  config: ConfigService
): Promise<TypeOrmModuleOptions> => ({
  type: "postgres",
  host: config.get<string>("TYPEORM_HOST"),
  username: config.get<string>("TYPEORM_USERNAME"),
  password: config.get<string>("TYPEORM_PASSWORD"),
  database: config.get<string>("TYPEORM_DATABASE"),
  port: config.get<number>("TYPEORM_PORT"),
  entities: [__dirname + "dist/**/*.entity{.ts,.js}"],
  migrations: [__dirname + "dist/migrations/*{.ts,.js}"],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  migrationsRun: true,
});

export const getJWTConfig = async (
  config: ConfigService
): Promise<JwtModuleOptions> => ({
  secret: config.get<string>("JWT_SECRET"),
});
