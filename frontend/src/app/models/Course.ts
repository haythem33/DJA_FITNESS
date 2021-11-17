import { User } from "./User";

export class Courses {
  coach!: string;
  courseName!:string;
  dateBegin!:Date;
  dateEnd!:Date;
  nbLimite!:number;
  users!:Array<User>
}
