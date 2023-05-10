import { RolesGuard } from "../guards/roles.guards";
import { UserRole } from "../user.entity";
import { SetMetadata, UseGuards } from "@nestjs/common";
import { applyDecorators } from "@nestjs/common";

export const Roles = (...roles: UserRole[]) => {
  return applyDecorators(SetMetadata("roles", roles), UseGuards(RolesGuard));
};
