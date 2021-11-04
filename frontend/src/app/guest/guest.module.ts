import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SubscribeComponent } from '../user/subscribe/subscribe.component';
import { CoursComponent } from './cours/cours.component';



@NgModule({
  declarations: [
    HomeComponent,
    SubscribeComponent,
    CoursComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class GuestModule { }
