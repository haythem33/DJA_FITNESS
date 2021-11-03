export class User {
  email!:string;
  username!:string;
  password!:string;
  subscription!: Subscription;
}
export class Subscription {
  dateBegin!:Date;
  dateEnd!:Date;
  period!: 1 | 2 | 3 | 6 | 9;
}
