import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { MatTabsModule}  from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
import {MatMenuModule} from '@angular/material/menu';
import { UserModule } from '../user/user.module';
@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule,
    MatMenuModule,
    UserModule
  ],
  exports :[
    AuthComponent,
  ],
  providers : [AuthServiceService,CookieService]
})
export class AuthModule { }
