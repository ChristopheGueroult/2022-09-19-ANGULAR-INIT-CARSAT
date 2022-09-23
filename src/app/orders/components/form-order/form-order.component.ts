import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() item: Order;
  @Output() submited: EventEmitter<Order> = new EventEmitter<Order>();
  public states = Object.values(StateOrder);
  public form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.item = new Order();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      typePresta: [this.item.typePresta, Validators.required],
      client: [
        this.item.client,
        [Validators.required, Validators.minLength(3)],
      ],
      nbJours: [this.item.nbJours],
      tjmHt: [this.item.tjmHt],
      tva: [this.item.tva],
      state: [this.item.state],
      comment: [this.item.comment],
      id: [this.item.id],
    });
  }
  onSubmit(): void {
    this.submited.emit(this.form.value);
  }
}
