import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  amount!:number
  constructor(private userService : UserService,public dialogRef: MatDialogRef<SubscribeComponent>) { }

  ngOnInit(): void {
  }
  submit(period:NgForm) : void {
    this.userService.subscribe(period.value.per).subscribe((res) => {
      this.dialogRef.close({state : true});
    },(err) => {
      alert('ERROR SERVER');
      this.dialogRef.close({state : false});
    })
  }
  changeAmount(period:NgForm): void {
    this.amount = period.value.per * 60;
  }

}
