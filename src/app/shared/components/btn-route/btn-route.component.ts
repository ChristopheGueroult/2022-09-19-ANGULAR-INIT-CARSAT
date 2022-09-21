import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-route',
  templateUrl: './btn-route.component.html',
  styleUrls: ['./btn-route.component.scss'],
})
export class BtnRouteComponent implements OnInit {
  @Input() route!: string;
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
}
