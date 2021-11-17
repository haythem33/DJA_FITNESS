import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Courses } from 'src/app/models/Course';
import { Observable } from 'rxjs';
import { AuthComponent } from 'src/app/auth/auth.component';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';
import { SubscribeComponent } from 'src/app/user/subscribe/subscribe.component';

@Injectable({
  providedIn: 'any'
})
export class GuestService {

  constructor(private http : HttpClient,private auth : AuthServiceService) { }

  getAllCourses() : Observable<Array<Courses>> {
    return this.http.get<Array<Courses>>("http://localhost:3000/user/getCourses");
  }
  joinCourse(id:string) {
    const email = this.auth.decodeToken().email;
    return this.http.post(`http://localhost:3000/user/${id}/${email}`,{});
  }
  // openSubscribe() {
  //   this.dialog.closeAll();
  //   this.dialog.open(SubscribeComponent,{
  //     width : '600px'
  //   })
  // }
  // close() {
  //   this.dialog.closeAll();
  // }
}
