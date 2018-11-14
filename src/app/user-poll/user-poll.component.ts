import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserPollComponent implements OnInit {

  public yes: number;
  public no: number;
  public hasVoted = false;
  pollRef: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.afs.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    this.pollRef = this.afs.doc('polls/elements');

    this.pollRef.valueChanges().pipe(
      tap((doc) => {
        if (doc) {
          this.yes = (doc.yes) ? doc.yes : 0;
          this.no = (doc.no) ? doc.no : 0;
        } else {
          this.yes = 0;
          this.no = 0;
        }
      })
    ).subscribe();
  }

  public vote(val: string) {
    this.hasVoted = true;
    this.pollRef.update({ [val]: this[val] + 1 });
  }

  get yesPercent() {
    return (this.yes / (this.yes + this.no)) * 100;
  }

  get noPercent() {
    return (this.no / (this.yes + this.no)) * 100;
  }

}
