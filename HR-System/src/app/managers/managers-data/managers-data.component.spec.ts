import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersDataComponent } from './managers-data.component';

describe('ManagersDataComponent', () => {
  let component: ManagersDataComponent;
  let fixture: ComponentFixture<ManagersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
