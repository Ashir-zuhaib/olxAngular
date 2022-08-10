import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OlxService } from 'src/app/services/olx.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userData: any;
  selectedElement: string = 'Ca';
  selectedElementControl = new FormControl();

  selectedElementGroup: string[] = [];
  constructor(private olxServices: OlxService) {
    this.userData = this.olxServices.user;
    // console.log('userhead', user);
    console.log('userdata header', this.userData);

    // this.userData = this.olxServices.user;
    // console.log('this.userData', this.userData);
  }

  ngOnInit(): void {}
}
