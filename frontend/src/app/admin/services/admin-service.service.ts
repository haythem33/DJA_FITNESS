import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Admin } from 'src/app/models/Admin';
import jwt_decode from 'jwt-decode';
import { Courses } from 'src/app/models/Course';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AdminServiceService {
  header: HttpHeaders = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http : HttpClient,private cookie : CookieService) { }
  login(data : Admin) {
    return this.http.post("http://localhost:3000/auth/loginAdmin",JSON.stringify(data),{
      headers : this.header
    });
  }
  updateCourses(data : Courses) {
    return this.http.put(`http://localhost:3000/course/updateCourse/${data._id}`,JSON.stringify(data),{
      headers : this.header
    });
  }
  deleteCourses(data : Courses) {
    return this.http.delete(`http://localhost:3000/course/deleteCourse/${data._id}`,{
      headers : this.header
    })
  }
  addCourses(data : Courses) {
    return this.http.post(`http://localhost:3000/course/addCourse`,JSON.stringify(data),{
      headers : this.header
    })
  }
  addProduct(data: Product) {
    return this.http.post(`http://localhost:3000/product/addProduct`,JSON.stringify(data),{
      headers : this.header
    })
  }
  updateProduct(data:Product) {
    return this.http.put(`http://localhost:3000/product/updateProduct/${data._id}`,JSON.stringify(data),{
      headers : this.header
    })
  }
  deleteProduct(data:Product) {
    return this.http.delete(`http://localhost:3000/product/deleteProduct/${data._id}`,{
      headers : this.header
    })
  }
  getAllProduct() : Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:3000/product/getAllProduct')
  }
  saveToken(token : string) {
    this.cookie.set('adminToken',token);
  }
  verifyToken() : boolean {
    return this.cookie.check('token');
  }
  decodeToken() : boolean | any {
    if(!this.verifyToken()) {
      return false;
    }
    const token = this.cookie.get('token');
    return jwt_decode(token);
  }
  deleteToken() : void {
      this.cookie.deleteAll();
  }
}
