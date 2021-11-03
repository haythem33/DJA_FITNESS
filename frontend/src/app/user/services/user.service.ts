import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from 'src/app/models/Course';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  subscribe(email: string, period: number) {
    return this.http.post(
      'http://localhost:3000/user/subscription',
      JSON.stringify({ email: email, period: period })
    );
  }
}
