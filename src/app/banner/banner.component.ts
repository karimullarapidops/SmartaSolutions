import { fades, fadeap, fadeg, fadeas, fadeb, zoomin } from './../animate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    fades,
    fadeap,
    fadeg,
    fadeas,
    fadeb,
    zoomin
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  url = window.location.pathname;
  w = window.innerWidth;


}
