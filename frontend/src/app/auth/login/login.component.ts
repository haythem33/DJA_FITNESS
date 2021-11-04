import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GuestService } from 'src/app/guest/services/guest.service';
import { User } from 'src/app/models/User';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  loginSub!: Subscription;
  constructor(private auth : AuthServiceService,private guestService : GuestService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }
   submit(user:NgForm) {
    const _user = new User();
    _user.email = user.value.email;
    _user.password = user.value.password;
    this.loginSub = this.auth.login(_user).subscribe((res : any) => {
        this.auth.saveToken(res.token);
        this.guestService.closeAuth();
    },(err) => {
      alert('BAD INFORMATION')
    })
  }

}
