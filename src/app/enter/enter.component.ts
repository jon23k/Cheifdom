import { Component, OnInit } from '@angular/core';
import * as graphics from './graphics-render.js';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  constructor() { 
    graphics;
  }

  ngOnInit(): void {
  }

}
