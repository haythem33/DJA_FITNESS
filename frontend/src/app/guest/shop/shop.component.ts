import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/services/admin-service.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  allProduct!:Array<Product>
  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct() {
    this.adminService.getAllProduct().subscribe((res) => {
      this.allProduct = res;
    })
  }

}
