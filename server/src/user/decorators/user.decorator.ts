import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../user.entity';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const user: User = context.switchToHttp().getRequest().user;
    return user ? user.id : null;
  },
);
