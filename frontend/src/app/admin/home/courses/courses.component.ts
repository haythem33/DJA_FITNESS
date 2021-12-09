import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuestService } from 'src/app/guest/services/guest.service';
import { Courses } from 'src/app/models/Course';
import { AdminServiceService } from '../../services/admin-service.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  allCourses!:Array<Courses>
  constructor(private guestService : GuestService,private dialog: MatDialog,private adminService : AdminServiceService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }
  getAllCourses() {
    this.guestService.getAllCourses().subscribe((courses: Array<Courses>) => {
      this.allCourses = courses;
    }, () => {
      console.log("NO COURSES")
    });
  }
  checkTime(cour:Courses) : boolean {
    if(new Date(cour.dateEnd).getTime() > new Date().getTime()) {
      return false;
    }
    return true;
  }
  update(course: Courses) {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.data = Courses.fromObject(course);
    dialogRef.componentInstance.state = "UPDATE";
    dialogRef.componentInstance.title = "COURSE";
    dialogRef.afterClosed().subscribe((res) => {
      if(res.state) {
        this.getAllCourses();
      }
    })
  }
  delete(course: Courses) {
      this.adminService.deleteCourses(course).subscribe(() => {
        this.getAllCourses();
      },() => {
        alert("ERROR SERVER");
      });
  }
  add() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.state = "ADD";
    dialogRef.componentInstance.title = "COURSE";
    dialogRef.afterClosed().subscribe((res) => {
      if(res.state) {
        this.getAllCourses();
      }
    })
  }
}
