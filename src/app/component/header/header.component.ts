import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  selectedElement: string = 'Ca';
  selectedElementControl = new FormControl();

  selectedElementGroup: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
