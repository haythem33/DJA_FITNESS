import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../guest/about/about.component';
import { CoursComponent } from '../guest/cours/cours.component';
import { HomeComponent } from '../guest/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path : "login",
    component: LoginComponent
  },
  {
    path : "about",
    component: AboutComponent
  },
  {
    path : "Home",
    component: HomeComponent
  },
  {
    path : "cours",
    component: CoursComponent
  },


  {
    path: "signup",
    component : SignUpComponent
  }
];
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class AuthRoutingModule { }
