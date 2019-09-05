import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { WellsFargoComponent } from "../wells-fargo/wells-fargo.component";
import { Router } from '@angular/router';
import { AchieveItComponent } from '../achieve-it/achieve-it.component';
import { DuolingoComponent } from '../duolingo/duolingo.component';

@Component({
  selector: "app-project-grid",
  templateUrl: "./project-grid.component.html",
  styleUrls: ["./project-grid.component.scss"]
})
export class ProjectGridComponent implements OnInit {
  projects = [
    {
      link: "1",
      img: "./assets/WellsFargo.png",
      title: "Wells Fargo"
    },
    {
      link: "2",
      img: "./assets/AIPic.png",
      title: "Test title"
    },
    {
      link: "3",
      img: "./assets/duoorangepage.jpeg",
      title: "Test title"
    }
  ];
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  goTo(link: string) {
    this.openDialog(link);
    // this.router.navigateByUrl("/wellsFargo");
  }

  openDialog(link: string): void {
    let component;
    switch (link) {
      case "1":
        component = WellsFargoComponent;
        break;
      case "2":
        component = AchieveItComponent;
        break;
      case "3":
        component = DuolingoComponent;
        break;
      default:
        component = WellsFargoComponent;
        break;
    }
    this.dialog.open(component, {
      width: "80vw",
      height: "90vh",
      panelClass: "noPadding"
    });
  }
}
