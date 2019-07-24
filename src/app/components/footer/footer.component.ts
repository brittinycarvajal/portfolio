import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  socialMedia = [
    {
      text: "Facebook",
      icon: "fab fa-facebook",
      link: ""
    },
    {
      text: "Instagram",
      icon: "fab fa-instagram",
      link: ""
    },
    {
      text: "LinkedIn",
      icon: "fab fa-linkedin",
      link: ""
    },
    {
      text: "Pinterest",
      icon: "fab fa-pinterest",
      link: ""
    }
  ];
  constructor() {}

  ngOnInit() {}
}
