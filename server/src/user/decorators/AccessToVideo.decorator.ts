import { User, UserRole } from "../user.entity";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common";

export const AccessToVideo = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: User = request.user;
    const videoUserId: number = request.params.id;
    if (videoUserId !== user.id && user.role !== UserRole.Admin) {
      throw new UnauthorizedException(
        "Only the creator or an administrator can perform this action"
      );
    }

    return user;
  }
);
