import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookformComponent } from './bookform/bookform.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { RtpcrformComponent } from './rtpcrform/rtpcrform.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'books',component:CatalogueComponent},
  {path:'addbook',component:BookformComponent},
  {path:'rtpcr',component:RtpcrformComponent},
  {path:'employeeform',component:EmployeeformComponent},
  {path:'customerform',component:CustomerformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
