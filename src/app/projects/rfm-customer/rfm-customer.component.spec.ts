import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfmCustomerComponent } from './rfm-customer.component';

describe('RfmCustomerComponent', () => {
  let component: RfmCustomerComponent;
  let fixture: ComponentFixture<RfmCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfmCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfmCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
