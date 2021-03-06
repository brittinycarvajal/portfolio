import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: "app-wells-fargo",
  templateUrl: "./wells-fargo.component.html",
  styleUrls: ["./wells-fargo.component.scss"]
})
export class WellsFargoComponent extends ModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<WellsFargoComponent>) {
    super(dialogRef);
  }
  // constructor() {}

  ngOnInit() {}
}
