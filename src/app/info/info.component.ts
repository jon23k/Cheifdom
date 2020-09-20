import { Component, OnInit } from '@angular/core';
import * as graphics from './graphics-render.js';

@Component({
  selector: 'app-info',
  moduleId: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { 
    graphics;
  }

  ngOnInit(): void {
  }

}
