import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Courses } from 'src/app/models/Course';
import { Product } from 'src/app/models/Product';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() data!: Courses | Product | any;
  @Input() state!: "ADD" | "UPDATE";
  @Input() title!: "COURSE" | "PRODUCT";

  constructor(private adminService: AdminServiceService,public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void { 
    if(this.state === "ADD" && this.title === "COURSE") {
      this.data = new Courses();
      return;
    }
    if(this.state === "ADD" && this.title === "PRODUCT") {
      this.data = new Product();
      return;
    }
  }

  update() {
    if(this.data instanceof Courses) {
      this.adminService.updateCourses(this.data).subscribe(() => {
        this.dialogRef.close({state : true})
      }, () => {
        this.dialogRef.close({state : false})
      });
      return;
    }
    if(this.data instanceof Product) {
      this.adminService.updateProduct(this.data).subscribe(() => {
        this.dialogRef.close({state : true})
      }, () => {
        this.dialogRef.close({state : false})
      });
      return;
    }
  }
  add() {
    if(this.data instanceof Courses) {
      this.adminService.addCourses(this.data).subscribe(() => {
        this.dialogRef.close({state : true})
      },() => {
        this.dialogRef.close({state : false});
      })
      return;
    }
    if(this.data instanceof Product) {
      this.adminService.addProduct(this.data).subscribe(() => {
        this.dialogRef.close({state : true});
      },() => {
        this.dialogRef.close({state : false})
      })
    }
  }
}
