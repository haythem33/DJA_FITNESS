import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MatSelectModule } from '@angular/material/select';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    SubscribeComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  exports : [UserComponent]
})
export class UserModule { }
