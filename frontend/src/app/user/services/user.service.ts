import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Injectable({
  providedIn: 'any'
})
export class UserService {
  header: HttpHeaders = new HttpHeaders().set('content-type', 'application/json');
  constructor(private auth : AuthServiceService,private http : HttpClient) { }


  subscribe(period : number) {
    const body = JSON.stringify({email : this.auth.decodeToken().data,period : period})
    return this.http.post("http://localhost:3000/user/subscription",body, {
      headers : this.header,
      responseType : 'text'
    });
  }
}
