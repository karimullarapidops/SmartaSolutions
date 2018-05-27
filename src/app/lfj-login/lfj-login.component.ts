import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lfj-login',
  templateUrl: './lfj-login.component.html',
  styleUrls: ['./lfj-login.component.css']
})
export class LfjLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  url = window.location.pathname;
}
