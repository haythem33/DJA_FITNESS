import { User } from "./User";

export class Courses {
  _id!:string;
  coach!: string;
  courseName!:string;
  dateBegin!:Date;
  dateEnd!:Date;
  nbLimite!:number;
  price!:number;
  users!:Array<userRating>
  static fromObject(course : any) : Courses {
    let c = new Courses();
    c._id = course._id;
    c.coach = course.coach;
    c.courseName = course.courseName;
    c.price = course.price;
    c.nbLimite = course.nbLimite;
    return c;
  }
}
export class userRating {
   userId!:User;
   rating!:number | null;
}
