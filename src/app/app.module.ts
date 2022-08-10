import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './component/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RecommendCardComponent } from './component/recommend-card/recommend-card.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { SellerHeaderComponent } from './component/seller-header/seller-header.component';
import { SellerdashboardComponent } from './pages/sellerdashboard/sellerdashboard.component';
import { LoginComponent } from './component/login/login.component';
import { SaleformComponent } from './component/saleform/saleform.component';

// import {AngularFireDatabase} from ''
const firebaseConfig = {
  apiKey: 'AIzaSyANwTpmeGRZJe2dfoCQupjVfCWsg71JHBk',
  authDomain: 'olxangular.firebaseapp.com',
  projectId: 'olxangular',
  storageBucket: 'olxangular.appspot.com',
  messagingSenderId: '1009562765034',
  appId: '1:1009562765034:web:03bb6d37e80c16d1807993',
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    RecommendCardComponent,
    SignupComponent,
    HomeComponent,
    SellerHeaderComponent,
    SellerdashboardComponent,
    LoginComponent,
    SaleformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase), // provideFirestore(() => getFirestore()),
    AngularFireStorageModule,
    // AngularFireModule.initializeApp(),
    // AngularFireDatabaseModule,
  ],
  providers: [
    // AngularFireDatabase,
    // FireserviceService
    { provide: BUCKET, useValue: 'olxangular.appspot.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
