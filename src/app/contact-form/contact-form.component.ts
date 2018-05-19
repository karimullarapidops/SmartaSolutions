import { Http } from '@angular/http';
import {MatSnackBar} from '@angular/material';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
forms:any[];
 url = 'https://sasbackend.herokuapp.com/api/contact';
  constructor(private http: Http, public snackBar: MatSnackBar) {
    http.get(this.url)
    .subscribe(Response => {
      let data=Response;
		console.log(data.status);
    })
   }

  ngOnInit() {
  }

  submit:boolean=true;
  spin:boolean=false;

  industries = [
    {value: 'example1', viewValue: 'example-1'},
    {value: 'example2', viewValue: 'example-2'},
    {value: 'example3', viewValue: 'example-3'}
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  formData={
    firstName:'',
    lastName:'',
    companyName:'',
    jobTitle:'',
    industry:'',
	address:{
		city:'',
		state:'',
		country:''
	},
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


onSubmit(){
  this.spin=true;
  this.submit=false;
  this.http.post(this.url, this.formData)
  .subscribe(res =>{
    if(res.status!=200) return this.openSnack('Something Went Wrong...! Try Again', 'failSnack');
  this.submit=true;
  this.spin=false;
  this.openSnack('Form Submitted Successfully...','snackbar');
  })
}

openSnack(message:string, pclass:string){
  this.snackBar.open(message,'X',{
    duration:2000,
    panelClass:[pclass]
  })
}


}
