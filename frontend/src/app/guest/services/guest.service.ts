import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Courses } from 'src/app/models/Course';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthComponent } from 'src/app/auth/auth.component';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';
import { SubscribeComponent } from 'src/app/user/subscribe/subscribe.component';

@Injectable({
  providedIn: 'any'
})
export class GuestService {
  event : EventEmitter<string> = new EventEmitter();
  constructor(private http : HttpClient,private dialog: MatDialog,private auth : AuthServiceService) { }

  getAllCourses() : Observable<Courses> {
    return this.http.get<Courses>("http://localhost:3000/user/getCourses");
  }
  joinCourse(id:string,email:string) {
    return this.http.post(`http://localhost:3000/user/${id}/${email}`,{});
  }
  openAuth() {
    this.dialog.closeAll();
    this.dialog.open(AuthComponent, {
      width : '600px'
    })
  }
  openSubscribe() {
    this.dialog.closeAll();
    this.dialog.open(SubscribeComponent,{
      width : '600px'
    })
  }
  closeAuth() {
    this.dialog.closeAll();
  }
  closeSubscribe() {

  }
}
