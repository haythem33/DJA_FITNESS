import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuestService } from 'src/app/guest/services/guest.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  amount!:number
  constructor(private userService : UserService,private geustService : GuestService) { }

  ngOnInit(): void {
  }
  submit(period:NgForm) : void {
    this.userService.subscribe(period.value.per).subscribe((res) => {
      alert(res);
      this.geustService.closeSubscribe()
    },(err) => {
      console.log(err)
      alert('ERROR SERVER');
    })
  }
  changeAmount(period:NgForm): void {
    this.amount = period.value.per * 60;
  }

}
