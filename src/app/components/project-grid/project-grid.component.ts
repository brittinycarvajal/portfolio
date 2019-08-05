import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { WellsFargoComponent } from "../wells-fargo/wells-fargo.component";
import { Router } from '@angular/router';
import { AchieveItComponent } from '../achieve-it/achieve-it.component';

@Component({
  selector: "app-project-grid",
  templateUrl: "./project-grid.component.html",
  styleUrls: ["./project-grid.component.scss"]
})
export class ProjectGridComponent implements OnInit {
  projects = [
    {
      link: "1",
      img: "../../assets/WellsFargo.png",
      title: "Wells Fargo"
    },
    {
      link: "2",
      img: "../../assets/AIPic.png",
      title: "Test title"
    }
  ];
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  goTo(link: string) {
    // this.openDialog(link);
    console.log("tile clicked", link);
    this.router.navigateByUrl("/wellsFargo");
  }

  openDialog(link: string): void {
    let component;
    switch (link) {
      case "1":
        component = WellsFargoComponent;
        break;
      default:
        component = AchieveItComponent;
        break;
    }
    this.dialog.open(component, {
      width: "80vw",
      height: "90vh",
      panelClass: "noPadding"
    });
  }
}
