import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Courses, userRating } from 'src/app/models/Course';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() cour!:Courses;
  rating!:number;
  stars:Array<string>= [];
  UserRating!:number;
  userStarts:Array<string>= [];
  constructor(private guestService : GuestService) { }

  ngOnInit(): void {
    this.getCourseRating();
    this.getUserCourseRating()
  }
  getUserCourseRating() {
    this.guestService.getUserCourseRating(this.cour._id).subscribe((res) => {
        this.UserRating = (res as userRating).rating as number;
        this.userStarts = this.convertNumberToStar(this.UserRating);
    }, (err) => {
      console.log(err)
    })
  }
  getCourseRating() {
    this.guestService.getCourseRating(this.cour._id).subscribe((res) => {
      this.rating = Number(res);
      this.stars = this.convertNumberToStar(this.rating);
    }, (err)=> {
      alert(err);
    })
  }
  convertNumberToStar(rating:number) : Array<string> {
    let tab = [];
    for(let i = 1;i < 6;i++) {
      if(rating - i >= 1 ) {
        tab.push("star");
      } else if(rating - i < 1 && rating - i > 0) {
        tab.push("star_half");
      } else if(rating - i <= 0) {
        tab.push("star_border");
      }
    }
    return tab;
  }
  evalutateCourse(index:number) {
      this.guestService.courseRating(this.cour._id,index).subscribe(() =>{
        this.getCourseRating();
        this.getUserCourseRating();
      },(err) =>{
        console.log(err)
      })
  }

}
