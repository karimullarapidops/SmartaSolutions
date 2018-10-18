import { zoomin } from './../animate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lfj-signup',
  templateUrl: './lfj-signup.component.html',
  styleUrls: ['./lfj-signup.component.css'],
  animations:[
    zoomin
  ]
})
export class LfjSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit=true;
  spin=false;

}
