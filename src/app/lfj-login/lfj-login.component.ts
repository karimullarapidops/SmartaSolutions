import { zoomin } from './../animate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lfj-login',
  templateUrl: './lfj-login.component.html',
  styleUrls: ['./lfj-login.component.css'],
  animations:[
    zoomin
  ]
})
export class LfjLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  submit=true;
  spin=false;


  url = window.location.pathname;
}
