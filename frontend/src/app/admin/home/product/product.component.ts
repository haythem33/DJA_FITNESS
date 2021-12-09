import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/Product';
import { AdminServiceService } from '../../services/admin-service.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allProducts!:Array<Product>
  constructor(private adminService : AdminServiceService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProduct()
  }
  getAllProduct() {
    this.adminService.getAllProduct().subscribe((res) => {
      this.allProducts = res;
    },() => {
      alert("NO DATA")
    })
  }
  add() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.state = "ADD";
    dialogRef.componentInstance.title = "PRODUCT";
    dialogRef.afterClosed().subscribe((res) => {
      if(res.state) {
        this.getAllProduct();
      }
    })
  }
  delete(data : Product) {
    this.adminService.deleteProduct(data).subscribe(() => {
      this.getAllProduct();
    })
  }
  update(data : Product) {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.data = Product.fromObject(data);
    dialogRef.componentInstance.state = "UPDATE";
    dialogRef.componentInstance.title = "PRODUCT";
    dialogRef.afterClosed().subscribe((res) => {
      if(res.state) {
        this.getAllProduct();
      }
    })
  }
}
