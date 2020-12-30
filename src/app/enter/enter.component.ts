import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {PasswordModalComponent} from '../modals/password-modal/password-modal.component';

@Component({
  selector: 'app-enter',
  moduleId: 'enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PasswordModalComponent, dialogConfig);
  }

  navigateToInfo() : void {
    this.router.navigate(['/info']).then(() => {
      window.location.reload();
    });
  }

}
