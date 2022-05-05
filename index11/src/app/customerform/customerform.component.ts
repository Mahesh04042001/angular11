import { Component, OnInit } from '@angular/core';
import { BooksdaoService } from '../booksdao.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

  customerModel: any;
  constructor(public _maths:BooksdaoService) { }
  fname:any;
  ngOnInit(): void {
    this.customerModel = {
      firstName: '',
      lastName: '',
      email: 'hari@gmail.com'
    }
  }
  saveCustomer(customerFormGroup:any) {
    if (customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }
  increase() {
    this._maths.add();
  }
  // onchange(){
  //   this.fname = this.customerModel.firstName.value();
  // }
}
