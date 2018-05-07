import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

formData={
  firstName:'',
  lastName:'',
  companyName:'',
  jobTitle:'',
  industry:'',
  city:'',
  state:'',
  country:'',
  email:'',
  phoneNumber:'',
  services:{
    oracle:false,
    sap:false,
    workday:false,
    other:false
  },
  bestTime:''
};

  industries = [
    {value: 'example1', viewValue: 'example-1'},
    {value: 'example2', viewValue: 'example-2'},
    {value: 'example3', viewValue: 'example-3'}
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);

onSubmit(){
  console.log(this.formData);
}


}