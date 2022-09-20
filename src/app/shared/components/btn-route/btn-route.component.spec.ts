import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRouteComponent } from './btn-route.component';

describe('BtnRouteComponent', () => {
  let component: BtnRouteComponent;
  let fixture: ComponentFixture<BtnRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
