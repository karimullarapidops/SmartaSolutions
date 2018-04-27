import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  industries = [
    {value: 'example1', viewValue: 'example-1'},
    {value: 'example2', viewValue: 'example-2'},
    {value: 'example3', viewValue: 'example-3'}
  ];
}

