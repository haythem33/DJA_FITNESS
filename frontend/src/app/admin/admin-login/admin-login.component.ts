import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService : AdminServiceService,private router : Router) { }

  ngOnInit(): void {
  }
  login(a:NgForm) {
    let admin = new Admin();
    admin.username = a.value.username;
    admin.password = a.value.password;
    this.adminService.login(admin).subscribe((res:any) =>{
      this.adminService.saveToken(res.token);
      this.router.navigate(['/admin/home']);
    },(err) => {
      alert('BAD INFORMATION');
    })
  }

}
