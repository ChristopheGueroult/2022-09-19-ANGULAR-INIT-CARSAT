import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // property collection
  private collection$: Subject<Order[]> = new Subject<Order[]>();
  public test$ = new Observable((subscribers) => {
    subscribers.next('coucou je suis un flux de data');
  });
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {}

  // refresh Collection
  private refreshCollection() {
    this.http
      .get<Order[]>(`${this.urlApi}/orders/`)
      .subscribe((data) => this.collection$.next(data));
  }
  // get collection
  get collection(): Subject<Order[]> {
    this.refreshCollection();
    return this.collection$;
  }
  // set collection
  set collection(col: Subject<Order[]>) {
    this.collection$ = col;
  }

  // change state item
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // get item by id
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  // delete item in collection
  public delete(id: number): Observable<Order> {
    return this.http
      .delete<Order>(`${this.urlApi}/orders/${id}`)
      .pipe(tap((data) => this.refreshCollection()));
  }
}
