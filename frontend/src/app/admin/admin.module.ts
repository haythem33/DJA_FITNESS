import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from './services/admin-service.service';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './home/courses/courses.component';
import { ProductComponent } from './home/product/product.component';
import { GuestModule } from '../guest/guest.module';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './home/dialog/dialog.component'
@NgModule({
  declarations: [
    AdminLoginComponent,
    HomeComponent,
    CoursesComponent,
    ProductComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    GuestModule,
    MatChipsModule,
    MatIconModule
  ],
  providers : [AdminServiceService,CookieService]
})
export class AdminModule { }
