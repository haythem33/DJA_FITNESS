import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Courses, userRating } from 'src/app/models/Course';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Injectable({
  providedIn: 'any'
})
export class GuestService {
  header: HttpHeaders = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  getAllCourses(): Observable<Array<Courses>> {
    return this.http.get<Array<Courses>>("http://localhost:3000/user/getCourses");
  }
  joinCourse(id: string) {
    const userId = this.auth.decodeToken().user._id;
    return this.http.post(`http://localhost:3000/user/joinCourse/${id}/${userId}`, {},
      {
        headers: this.header,
        responseType : 'text'
      }
    );
  }
  getCourseRating(id : string) : Observable<string> {
    return this.http.get(`http://localhost:3000/user/getCourseRating/${id}`,{
      responseType : 'text'
    });
  }
  courseRating(courseId:string,rate:number) : Observable<string> {
    const userId = this.auth.decodeToken().user._id;
    return this.http.put(`http://localhost:3000/user/rateCourse/${courseId}/${userId}`,JSON.stringify({rating : rate}),{
      headers : this.header,
      responseType : 'text'
    })
  }
  getUserCourseRating(id:string) : Observable<userRating | string> {
    const userId = this.auth.decodeToken().user._id;
    return this.http.get<userRating | string>(`http://localhost:3000/user/getUserCourseRating/${id}/${userId}`)
  }
}
