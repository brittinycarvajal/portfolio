import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { WellsFargoComponent } from "../wells-fargo/wells-fargo.component";

@Component({
  selector: "app-project-grid",
  templateUrl: "./project-grid.component.html",
  styleUrls: ["./project-grid.component.scss"]
})
export class ProjectGridComponent implements OnInit {
  projects = [
    {
      link: "",
      img: "../../assets/WellsFargo.png",
      title: "Wells Fargo"
    },
    {
      link: "",
      img: "",
      title: "Test title"
    },
    {
      link: "",
      img: "",
      title: "Test title"
    },
    {
      link: "",
      img: "",
      title: "Test title"
    },
    {
      link: "",
      img: "../../assets/WellsFargo.png",
      title: "Wells Fargo"
    },
    {
      link: "",
      img: "",
      title: "Test title"
    },
    {
      link: "",
      img: "",
      title: "Test title"
    },
    {
      link: "",
      img: "",
      title: "Test title"
    }
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  goTo(link: string) {
    console.log("tile clicked", link);
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(WellsFargoComponent, {
      width: "80vw",
      height: "90vh"
    });
  }
}
