import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Courses } from 'src/app/models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http : HttpClient) { }

  getAllCourses() : Observable<Courses> {
    return this.http.get<Courses>("http://localhost:3000/user/getCourses");
  }
  joinCourse(id:string,email:string) {
    return this.http.post(`http://localhost:3000/user/${id}/${email}`,{});
  }
}
