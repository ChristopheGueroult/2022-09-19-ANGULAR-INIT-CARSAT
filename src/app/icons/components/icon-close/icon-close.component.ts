import { Component, OnInit } from '@angular/core';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss'],
})
export class IconCloseComponent implements OnInit {
  public myIcon = faRectangleXmark;
  constructor() {}

  ngOnInit(): void {}
}
