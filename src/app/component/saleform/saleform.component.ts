import { Component, OnInit } from '@angular/core';
import { OlxService } from 'src/app/services/olx.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-saleform',
  templateUrl: './saleform.component.html',
  styleUrls: ['./saleform.component.css'],
})
export class SaleformComponent implements OnInit {
  title: string = '';
  desc: string = '';
  price: string = '';
  Imageurl: any;
  // file: any;
  constructor(
    private olxService: OlxService,
    private storage: AngularFireStorage
  ) {}
  ngOnInit(): void {}
  uploadFile(event: any) {
    console.log('1 > event: ', event);
    const file = event.target.files[0];
    console.log('2 > file: ', file);
    const filePath = file.name;
    console.log('3 > filePath: ', filePath);
    const ref = this.storage.ref(filePath);
    console.log('4 > ref: ', ref);
    const task = this.storage.upload(filePath, file);
    console.log('5 > task: ', task);
    console.log('6 > ', ref.getDownloadURL);
    // observe percentage changes
    task
      .percentageChanges()
      .subscribe((p) => console.log('6 > percentage: ', p));
    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(
        finalize(
          () =>
            ref.getDownloadURL().subscribe((url) => {
              this.Imageurl = url;
              console.log('7 ===> snapshotChanges: ', url);
            })

          // console.log('7 ===> snapshotChanges: ', ref.getDownloadURL())
        )
      )
      .subscribe();
  }
  add() {
    console.log('filecheck', this.Imageurl);
    if ((this.title && this.desc && this.price && this.Imageurl) == '') {
      alert('please fill all fields');
    } else {
      this.olxService.add(this.title, this.desc, this.price, this.Imageurl);
      this.title = '';
      this.desc = '';
      this.price = '';
      this.Imageurl = '';
    }
  }
}
