import { Component, OnInit} from '@angular/core';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';
import { Courses, userRating } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  allCourses: Array<Courses> = [];
  User!: User;
  authState: boolean = false;
  constructor(private guestService: GuestService, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.getAllCourses();
    if (this.authService.verifyToken()) {
      this.User = this.authService.decodeToken().user;
      this.authState = true;
    }
  }
  getAllCourses() {
    this.guestService.getAllCourses().subscribe((courses: Array<Courses>) => {
      this.allCourses = courses;
    }, () => {
      console.log("NO COURSES")
    });
  }
  registerToCourse(id: string) {
    if(!this.authState) {
      alert("YOUR NOT LOGGED");
      return;
    }
    this.guestService.joinCourse(id).subscribe(() => {
      alert("YOU JOINED THE COURSE")
      this.getAllCourses();
    }, (err) => {
      console.log(err);
    })
  }
  watchAuthState(event : boolean) {
    this.ngOnInit();
    this.authState = event;
  }
  checkUserCourse(users:Array<userRating>) : boolean {
     if(users.find(user => user.userId._id === this.User._id)) {
       return true;
     }
     return false;
  }
  checkTime(cour:Courses) : boolean {
    if(new Date(cour.dateEnd).getTime() > new Date().getTime()) {
      return false;
    }
    return true;
  }

}
