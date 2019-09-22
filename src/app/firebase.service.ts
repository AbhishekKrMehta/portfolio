import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firebaseDb: AngularFireDatabase,
    private firebaseStorage: AngularFireStorage) { }

  saveContact(contactName, contactDetails) {
    return this.firebaseDb.object(`contactDetails/${contactName}`).set(contactDetails);
  }

  getCvDownloadUrl(): Observable<any> {
    const ref = this.firebaseStorage.ref('media/abhishek_mehta_cv.pdf');
    return ref.getDownloadURL();
  }
}
