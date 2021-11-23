import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from 'src/app/models/User';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'any'
})
export class AuthServiceService {
  header: HttpHeaders = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http : HttpClient,private cookie : CookieService) { }

  login(data : User) {
    return this.http.post("http://localhost:3000/auth/login",JSON.stringify(data),{
      headers : this.header
    });
  }
  saveToken(token : string) {
    this.cookie.set('token',token);
  }
  verifyToken() : boolean {
    return this.cookie.check('token');
  }
  decodeToken() : any {
    const token = this.cookie.get('token');
    return jwt_decode(token);
  }
  deleteToken() : void {
      this.cookie.deleteAll();
  }
  register(user:User){
    return this.http.post("http://localhost:3000/auth/register" , user,{
      headers:this.header
    })
  }
}
