import { Injectable ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from 'src/app/models/User';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'any'
})
export class AuthServiceService {
  header: HttpHeaders = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http : HttpClient,private cookie : CookieService,private dialog: MatDialog) { }

  login(data : User) {
    return this.http.post("http://localhost:3000/auth/login",JSON.stringify(data),{
      headers : this.header
    });
  }
  register(user:User) {
    return this.http.post("http://localhost:3000/auth/register",JSON.stringify(user),{
      headers : this.header,
      responseType : 'text'
    })
  }
  saveToken(token : string) {
    this.cookie.set('token',token);
  }
  verifyToken() : boolean {
    return this.cookie.check('token');
  }
  decodeToken() : boolean | any {
    if(!this.verifyToken()) {
      return false;
    }
    const token = this.cookie.get('token');
    return jwt_decode(token);
  }
  deleteToken() : void {
      this.cookie.deleteAll();
  }
  openAuthModal() : MatDialogRef<LoginComponent> {
    this.dialog.closeAll();
    return this.dialog.open(LoginComponent, {
      width: '600px'
    })
  }
}
