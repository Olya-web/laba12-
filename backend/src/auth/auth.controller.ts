import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/sign-up')
    signUp(@Body() body) {
        return this.authService.signUp(body);
    }

    @Post('/sign-in')
    signIn(@Body() body) {
        console.log(
            'Cigan-log: AuthController -> signIn -> this.authService.signIn(body);',
            this.authService.signIn(body),
        );
        return this.authService.signIn(body);
    }
}
