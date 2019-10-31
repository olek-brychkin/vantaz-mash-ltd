import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialMachineryComponent } from './special-machinery.component';

describe('SpecialMachineryComponent', () => {
  let component: SpecialMachineryComponent;
  let fixture: ComponentFixture<SpecialMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
