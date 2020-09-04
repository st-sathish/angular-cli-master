import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeFunctionsComponent } from './cafe-functions.component';

describe('CafeFunctionsComponent', () => {
  let component: CafeFunctionsComponent;
  let fixture: ComponentFixture<CafeFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
