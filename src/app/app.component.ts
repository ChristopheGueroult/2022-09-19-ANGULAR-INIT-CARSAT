import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'crm';
  obs = new Observable((subs) => {
    subs.next(Math.random());
  });
  subject = new Subject();
  behaviorsubject = new BehaviorSubject(Math.random());

  constructor() {
    this.obs.subscribe((data) => console.log(data));
    this.obs.subscribe((data) => console.log(data));

    this.subject.subscribe((data) => console.log(data));
    this.subject.subscribe((data) => console.log(data));
    this.subject.next(Math.random());

    this.behaviorsubject.subscribe((data) => console.log(data));
    this.behaviorsubject.subscribe((data) => console.log(data));
  }
}

// list des components pages
// page-sign-in
// page-sign-up
// page-sign-up
// page-list-orders
// page-add-order
// page-edit-order
// page-list-clients
// page-add-client
// page-edit-client
// page-not-found

// list components qui constituent nos vues
// template-full-width
// template-container
// icon-nav
// icon-close
// icon-edit
// icon-delete
// table-light
// btn-route
// form-order
// form-client
