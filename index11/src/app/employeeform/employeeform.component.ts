import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup } from '@angular/forms';
import {rangeValidator,emailMatchValidator} from '../my-validator'
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  employeeFormGroup:FormGroup;
  empRecord:any={
    firstName:'mahesh',
    lastName:'waran',
    email:'mahesh1@gmail.com',
    mobile:'9788142553'
  }
  formOptions:AbstractControlOptions={validators:emailMatchValidator};
  constructor(private fb:FormBuilder) {
    this.employeeFormGroup=this.fb.group({
      firstName:[this.empRecord.firstName,[Validators.required,Validators.minLength(3)]],
      lastName:[this.empRecord.lastName],
      emailGroup:this.fb.group({
        email:[this.empRecord.email,[Validators.required,Validators.email]],
        confirmEmail:['',[Validators.required,Validators.email]]
      },{validators:emailMatchValidator}),
      mobile:[this.empRecord.mobile],
      sendNotification:['email'],
      range:['',[rangeValidator(10,20)]]
    });
   }

  ngOnInit(): void {
    
  }
  get firstName(){
    return this.employeeFormGroup.get('firstName')!;

  }
  get email(){
    return this.employeeFormGroup.get('email')!;

  }
  get range(){
    return this.employeeFormGroup.get('range')!;

  }
  get mobile(){
    return this.employeeFormGroup.get('mobile')!;

  }
  get emailGroup(){
    return this.employeeFormGroup.get('emailGroup')!;

  }
  loadEmployee(){
    let data={
      firstName:'mahesh',
      lastName:'dhilip'
    }
    this.employeeFormGroup.patchValue(data);
  }
  doNotification(msgtype:any){
    if(msgtype==='sms'){
      let mobileControl=this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required,rangeValidator(8000000000,9999999999)]);
      mobileControl?.updateValueAndValidity();
    }
  }

}
