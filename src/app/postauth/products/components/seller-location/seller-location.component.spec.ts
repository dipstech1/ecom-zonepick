import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLocationComponent } from './seller-location.component';

describe('SellerLocationComponent', () => {
  let component: SellerLocationComponent;
  let fixture: ComponentFixture<SellerLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
