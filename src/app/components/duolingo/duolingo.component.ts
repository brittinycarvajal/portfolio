import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: "app-duolingo",
  templateUrl: "./duolingo.component.html",
  styleUrls: ["./duolingo.component.scss"]
})
export class DuolingoComponent extends ModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DuolingoComponent>) {
    super(dialogRef);
  }

  ngOnInit() {}
}
