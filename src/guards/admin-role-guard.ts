import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let user = request.user;

    user = await this.userService.checkUserById(user.id);

    if (user.isAdmin === true) return true;

    throw new HttpException('UNAUTHORIZED ACCESS', HttpStatus.FORBIDDEN);
  }
}

// I can create one role gaurd,
// with enum (Admin, Client)
// but you want the name to be isAdmin
// this is why i used boolean

// It is not logic to be isAdmin: Admin or isAdmin: Client
