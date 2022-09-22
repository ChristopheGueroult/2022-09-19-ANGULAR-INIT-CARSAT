import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // property collection
  private collection$!: Observable<Order[]>;
  public test$ = new Observable((subscribers) => {
    subscribers.next('coucou je suis un flux de data');
  });
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders/`);
  }
  // get collection
  get collection(): Observable<Order[]> {
    return this.collection$;
  }
  // set collection
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // change state item

  // update item in collection

  // add item in collection

  // get item by id
}
