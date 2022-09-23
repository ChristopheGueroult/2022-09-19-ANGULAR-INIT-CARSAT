import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public addItem(item: Order): void {
    console.log(item);
  }
}
