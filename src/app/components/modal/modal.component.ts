import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-modal",
  template: "base modal"
})
export class ModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  ngOnInit() {}
  onClose() {
    this.dialogRef.close();
  }
}
