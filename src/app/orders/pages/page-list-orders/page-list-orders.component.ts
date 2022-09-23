import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public states = Object.values(StateOrder);
  private sub: Subscription;
  public myTitle = 'List Orders';
  public headers!: string[];
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  constructor(private ordersService: OrdersService) {
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.collection$ = this.ordersService.collection;
    this.headers = [
      'Action',
      'Type',
      'Client',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.sub = this.ordersService.test$.subscribe((data) => console.log(data));
  }

  public changeState(item: Order, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    this.ordersService.changeState(item, state).subscribe((data) => {
      item = data;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
