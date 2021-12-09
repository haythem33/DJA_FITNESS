import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CoursesComponent } from './home/courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';

const routes: Routes = [
    {
        path: 'login',
        component : AdminLoginComponent
    },
    {
        path : 'home',
        component : HomeComponent,
        children : [
            {
                path : 'courses',
                component : CoursesComponent
            },
            {
                path : 'products',
                component : ProductComponent,
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }