import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-two-cols',
  templateUrl: './template-two-cols.component.html',
  styleUrls: ['./template-two-cols.component.scss'],
})
export class TemplateTwoColsComponent implements OnInit {
  @Input() title: string;
  constructor() {
    this.title = 'mon titre par default';
  }
  ngOnInit(): void {}
}
