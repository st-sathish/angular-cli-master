import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacySystemsComponent } from './legacy-systems.component';

describe('LegacySystemsComponent', () => {
  let component: LegacySystemsComponent;
  let fixture: ComponentFixture<LegacySystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacySystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacySystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
