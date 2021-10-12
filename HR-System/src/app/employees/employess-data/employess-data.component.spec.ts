import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployessDataComponent } from './employess-data.component';

describe('EmployessDataComponent', () => {
  let component: EmployessDataComponent;
  let fixture: ComponentFixture<EmployessDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployessDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployessDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
