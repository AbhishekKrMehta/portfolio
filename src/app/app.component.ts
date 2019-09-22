import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  HARDCODED_CV_URL = 'https://firebasestorage.googleapis.com/v0/b/portfolio-7bc36.appspot.com/o/media%2Fabhishek_mehta_cv.pdf?alt=media&token=7b556ffc-623a-4df3-9ed5-74961dff5e4b';
  cvDownloadUrl: string;

  constructor(private firebaseService: FirebaseService) { }
  ngOnInit() {
    this.firebaseService.getCvDownloadUrl().subscribe(url => {
      this.cvDownloadUrl = url.length ? url : this.HARDCODED_CV_URL;
    });
    console.warn(`If this website works, it was written by Abhishek. If not, I don't know who wrote it :P`);
  }
}
