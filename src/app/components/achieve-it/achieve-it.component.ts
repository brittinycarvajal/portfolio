import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: "app-achieve-it",
  templateUrl: "./achieve-it.component.html",
  styleUrls: ["./achieve-it.component.scss"]
})
export class AchieveItComponent extends ModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AchieveItComponent>) {
    super(dialogRef);
  }

  ngOnInit() {}
}
