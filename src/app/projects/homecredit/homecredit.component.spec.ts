import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecreditComponent } from './homecredit.component';

describe('HomecreditComponent', () => {
  let component: HomecreditComponent;
  let fixture: ComponentFixture<HomecreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
