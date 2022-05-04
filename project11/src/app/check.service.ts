import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private router:Router) { }
  nav(){
    this.router.navigate(['parent']);
    // this.router.navigateByUrl('parent/');
      }
}
