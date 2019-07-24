import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skill-list",
  templateUrl: "./skill-list.component.html",
  styleUrls: ["./skill-list.component.scss"]
})
export class SkillListComponent implements OnInit {
  skills = [
    {
      name: "Sketch",
      num: 90
    },
    {
      name: "Invision",
      num: 80
    },
    {
      name: "Mood Boards",
      num: 80
    },
    {
      name: "Flow Diagrams",
      num: 70
    },
    {
      name: "User Personas",
      num: 95
    },
    {
      name: "Wireframing",
      num: 85
    }
  ];

  constructor() {}

  ngOnInit() {}
}
