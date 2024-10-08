import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-types.enum';
import { RefreshTokenDto } from './dto/refresh-token.dto';


@Auth(AuthType.None)
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) { }
  
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Res({passthrough: true}) response: Response,
    @Body() signInDto: SignInDto
  ) {
    return this.authService.signIn(signInDto)
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh-tokens')
  refreshTokens(@Body() refreshTokenDto: RefreshTokenDto){
    return this.authService.refreshTokens(refreshTokenDto)
  }
}






//another way using cookies
// import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
// import { AuthenticationService } from './authentication.service';
// import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
// import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
// import { Response } from 'express';

// @Controller('authentication')
// export class AuthenticationController {
//   constructor(private readonly authService: AuthenticationService) {}

//   @Post('sign-up')
//   signUp(@Body() signUpDto: SignUpDto) {
//     return this.authService.signUp(signUpDto);
//   }

//   @HttpCode(HttpStatus.OK)
//   @Post('sign-in')
//   async signIn(
//     @Res({ passthrough: true }) response: Response,
//     @Body() signInDto: SignInDto
//   ) {
//     const accessToken = await this.authService.signIn(signInDto);
//     response.cookie('accessToken', accessToken, {
//       secure: true,
//       httpOnly: true,
//       sameSite: true,
//     });
//   }
// }
