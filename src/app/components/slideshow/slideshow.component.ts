import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-slideshow",
  templateUrl: "./slideshow.component.html"
})
export class SlideshowComponent implements OnInit {
  slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

  constructor() {}

  ngOnInit() {}
}
