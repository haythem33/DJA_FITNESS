import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursComponent } from './cours/cours.component';
import { AboutComponent } from './about/about.component';
import { GuestRoutingModule } from './guest-routing.module';
import { AuthModule } from '../auth/auth.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UserModule } from '../user/user.module';
import { GuestService } from './services/guest.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent,
    CoursComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    HttpClientModule,
    AuthModule,
    MatDialogModule,
    UserModule,
    FontAwesomeModule
  ],
  providers : [GuestService]
})
export class GuestModule { }
