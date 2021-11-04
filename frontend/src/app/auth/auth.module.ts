import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { MatTabsModule}  from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule
  ],
  exports :[
    AuthComponent,
  ],
  providers : [AuthServiceService,CookieService]
})
export class AuthModule { }
