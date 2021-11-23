import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  loginSub!: Subscription;
  constructor(private auth : AuthServiceService,public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.loginSub?.unsubscribe();
  }
  submit(user:NgForm) {
    const _user = new User();
    _user.email = user.value.email;
    _user.password = user.value.password;
    this.loginSub = this.auth.login(_user).subscribe((res : any) => {
        this.auth.saveToken(res.token);
        this.dialogRef.close({state : true});
    },(err) => {
      this.dialogRef.close({state : false});
      alert('BAD INFORMATION')
    })
  }

  register(userReg:NgForm){
    const _user = new User();
    _user.email = userReg.value.email;
    _user.password = userReg.value.password;
    _user.username= userReg.value.username;
    this.auth.register(_user).subscribe(res =>{
      console.log(_user + "tneek w tahcheelou ")
    } , err =>{
      console.log(err)
    })
  }


}
