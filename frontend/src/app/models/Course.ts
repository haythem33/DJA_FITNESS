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
}
export class userRating {
   userId!:User;
   rating!:number | null;
}
