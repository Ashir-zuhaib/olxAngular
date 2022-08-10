import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { OlxService } from 'src/app/services/olx.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public isAuthenticated = false;
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(private olxservice: OlxService) {
    // const things = firestore.collection('things').valueChanges();
    // things.subscribe(console.log);
  }

  ngOnInit(): void {}

  Signup() {
    let userData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.olxservice.Signup(userData);
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
