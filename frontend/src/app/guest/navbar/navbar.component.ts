import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private guestService : GuestService) { }

  ngOnInit(): void {

  }
  openAuth() : void {
    this.guestService.openAuth();
  }
  openSub() : void {
    this.guestService.openSubscribe();
  }
}
