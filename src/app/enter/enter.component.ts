import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as parallax from './parallax-scroll.js';

@Component({
  selector: 'app-enter',
  moduleId: 'enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {
      //parallax;
}

  ngOnInit(): void {}

  navigateToInfo() : void {
    this.router.navigate(['/info']).then(() => {
      window.location.reload();
    });
  }

}
