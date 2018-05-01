import { Component, OnInit } from '@angular/core';
import { slide } from '../animate';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    slide
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
