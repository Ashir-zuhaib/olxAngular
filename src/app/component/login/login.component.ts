import { Component, OnInit } from '@angular/core';
import { OlxService } from 'src/app/services/olx.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private olxservice: OlxService) {}

  ngOnInit(): void {}
  Login() {
    let userData = {
      email: this.email,
      password: this.password,
    };
    this.olxservice.Login(userData.email, userData.password);
    this.email = '';
    this.password = '';
  }
}
