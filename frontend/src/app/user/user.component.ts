import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { SubscribeComponent } from './subscribe/subscribe.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  stateSub = false;
  constructor(private dialog: MatDialog,private authService : AuthServiceService) {}

  ngOnInit(): void {
    if(this.authService.decodeToken().user.subscription) {
      this.stateSub = true;
    }
  }
  openSubModal() {
    this.dialog.closeAll();
    const dialogRef =  this.dialog.open(SubscribeComponent,{
      width : '600px'
    })
    dialogRef.afterClosed().subscribe((result) => {
        this.stateSub = result?.state;
    })
  }
}
