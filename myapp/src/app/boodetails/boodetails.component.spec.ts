import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoodetailsComponent } from './boodetails.component';

describe('BoodetailsComponent', () => {
  let component: BoodetailsComponent;
  let fixture: ComponentFixture<BoodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
