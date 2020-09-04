import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLinksComponent } from './other-links.component';

describe('OtherLinksComponent', () => {
  let component: OtherLinksComponent;
  let fixture: ComponentFixture<OtherLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
