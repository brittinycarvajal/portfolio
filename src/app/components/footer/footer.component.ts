import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  socialMedia = [
    {
      text: "LinkedIn",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/brittiny-carvajal/"
    },
    {
      text: "Behance",
      icon: "fab fa-behance-square",
      link: "https://www.behance.net/brittinycarvajal"
    }
  ];
  constructor(private sanitizer: DomSanitizer) {
  }
  sanitize(link: string){
    return this.sanitizer.bypassSecurityTrustUrl(link);
  }

  ngOnInit() {}
}
