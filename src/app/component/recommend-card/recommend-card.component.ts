import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { OlxService } from 'src/app/services/olx.service';

@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.css'],
})
export class RecommendCardComponent implements OnInit {
  FirebaseData: any;
  constructor(private olxService: OlxService) {
    // this.olxService.getFirebaseAd();
  }

  ngOnInit(): void {
    this.olxService.user.subscribe(async (user) => {
      if (user) {
        console.log('recommen', user);
        this.FirebaseData = await this.olxService.getFirebaseAd(user.uid);
        console.log('firebaseInrecomend', this.FirebaseData);
      }
    });
  }
}
