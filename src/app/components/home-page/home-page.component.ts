import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  sendEmail(){
    if (this.name && this.email && this.message) {
      alert(this.name + this.email + this.message);
    }
  }

}

