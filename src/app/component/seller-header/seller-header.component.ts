import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OlxService } from 'src/app/services/olx.service';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css'],
})
export class SellerHeaderComponent implements OnInit {
  // userData: any;
  selectedElement: string = 'Ca';
  selectedElementControl = new FormControl();

  selectedElementGroup: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
