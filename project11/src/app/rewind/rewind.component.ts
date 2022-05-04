import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-rewind',
  templateUrl: './rewind.component.html',
  styleUrls: ['./rewind.component.css']
})
export class RewindComponent {
value:boolean=false;
a:number=3;
b:number=5;

name:any="";
showOrHide(){
this.value=!this.value;
}
constructor(private router:Router,private cal:CheckService){}
//   nav(){
// this.router.navigate(['parent']);
// this.router.navigateByUrl('parent/'+this.name);
//   }
calling(){
  this.cal.nav();
}
}
