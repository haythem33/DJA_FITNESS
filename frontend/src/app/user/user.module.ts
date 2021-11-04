import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  exports : [SubscribeComponent]
})
export class UserModule { }
