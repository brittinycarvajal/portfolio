import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slideshow",
  templateUrl: "./slideshow.component.html",
})
export class SlideshowComponent implements OnInit {
  numOfDailyUIs = 17;
  slides = [...Array(this.numOfDailyUIs).keys()];

  constructor() {}

  ngOnInit() {}
}
