import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthServiceService) { }

  ngOnInit(): void {
  }
  submit(data:any) {
    this.auth.login(data).subscribe((res) => {
      console.log(res)
    },(err) => {
      console.log(err);
    })
  }

}
