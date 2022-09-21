import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTwoColsComponent } from './template-two-cols.component';

describe('TemplateTwoColsComponent', () => {
  let component: TemplateTwoColsComponent;
  let fixture: ComponentFixture<TemplateTwoColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTwoColsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateTwoColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
