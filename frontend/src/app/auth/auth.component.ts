import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from "./login/login.component";
import { AuthServiceService } from "./services/auth-service.service";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authState = false;
  userName!: string;
  constructor(private dialog: MatDialog, private authService: AuthServiceService) { }
  ngOnInit(): void {
    if (this.authService.verifyToken()) {
      this.authState = true;
      this.getUserDecode();
    }
  }
  openAuthModal() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px'
    })
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.state) {
        this.authState = result?.state;
        this.getUserDecode();
      }
    })
  }
  getUserDecode() {
    this.userName = this.authService.decodeToken().user.username;
  }
  logOut() {
    this.authService.deleteToken();
    this.authState = false;
  }
}
