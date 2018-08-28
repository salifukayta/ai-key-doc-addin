import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ItemService {

  constructor(private db: AngularFirestore) {

  }

  /**
   *
   * @returns {Observable<any[]>}
   */
  getAll(): Observable<any> {
  // getAll() {
    return this.db.collection('t').valueChanges();
  }

}
