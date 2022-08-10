import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Sell } from '../component/signup/Interface/Interface';
import { Router } from '@angular/router';
import { SellerdashboardComponent } from '../pages/sellerdashboard/sellerdashboard.component';
import { finalize, from, take } from 'rxjs';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  StorageReference,
} from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { async } from '@firebase/util';

@Injectable({
  providedIn: 'root',
})
export class OlxService {
  // user: any;
  user = this.afauth.authState;
  SellData: Sell[] = [];
  FirebaseData: any;
  private userCollection!: AngularFirestoreCollection<any>;
  private adCollection!: AngularFirestoreCollection<any>;

  private basePath = '/adsupload';
  constructor(
    private afauth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.userCollection = this.afs.collection('Users');
    this.adCollection = this.afs.collection('Ads');
    // this.afauth.authState.subscribe((user) => {
    //   if (user) {
    //     this.user = user;
    //     console.log(user);
    //     console.log('User is logged in');
    //   } else {
    //     console.log('User is logged out');
    //     this.user = null;
    //   }
    // });

    // this.afauth.onAuthStateChanged((user) => {
    //   if (user) {
    //     this.user = user;
    //     console.log(user);
    //     console.log('User is logged in');
    //   } else {
    //     console.log('User is logged out');
    //     this.user = null;
    //   }
    // });
  }
  Signup(userData: { username: string; email: string; password: string }) {
    console.log('user', userData);
    this.afauth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        // console.log(res.user?.uid);
        console.log('User created!!', res.user);
        // this.user = res.user;
        let data = {
          id: res.user?.uid,
          name: userData.username,
          email: userData.email,
          password: userData.password,
        };
        console.log('usrData', data);
        this.userCollection.doc(data.id).set(data);
        // .then(() => this.router.navigate(['seller']));
      })
      .catch((err) => console.log('Error!!!', err));
  }
  Login(email: string, password: string) {
    this.afauth.signInWithEmailAndPassword(email, password).then((res) => {
      // localStorage.setItem('ashir', res);
      console.log('user', res.user);
      this.router.navigate(['']);
    });
  }
  async add(title: string, desc: string, price: string, file: object) {
    const user = await this.afauth.currentUser;
    if (!user) {
      return;
    }
    console.log('file: ', file, typeof file);

    const adData = {
      title: title,
      desc: desc,
      price: price,
      userId: user.uid,
      image: file,
      time: new Date().getTime,
      // PosterId: this.user,
    };
    console.log(adData);
    this.SellData.push(adData);
    this.adCollection
      .doc()
      .set(adData)
      .then(() => console.log('added'));
  }

  getFirebaseAd(uid: string) {
    return new Promise((resolve, reject) => {
      this.afs
        .collection('Ads')
        .valueChanges()
        .pipe(take(1))
        .subscribe((snapshot) => {
          if (snapshot) {
            resolve(snapshot);
          } else {
            reject(snapshot);
          }
        });
    });
  }
}
