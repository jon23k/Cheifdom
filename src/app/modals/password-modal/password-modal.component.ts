import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss']
})
export class PasswordModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PasswordModalComponent>) {}

  ngOnInit() {}
  
  close() {
    this.dialogRef.close();
  }

}