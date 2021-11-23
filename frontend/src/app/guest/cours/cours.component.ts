import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/Course';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  allCourses:Array<Courses>=[];
  constructor(private guestService : GuestService) { }

  ngOnInit(): void {
    this.getAllCourses();

  }
  getAllCourses() {
    this.guestService.getAllCourses().subscribe((courses:Array<Courses>) => {
      this.allCourses = courses;
      console.log(courses);
    },(err) => {
      console.log("NO COURSES")
    });
  }

}
