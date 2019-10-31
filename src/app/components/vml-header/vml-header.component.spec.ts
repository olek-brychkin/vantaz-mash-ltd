import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmlHeaderComponent } from './vml-header.component';

describe('VmlHeaderComponent', () => {
  let component: VmlHeaderComponent;
  let fixture: ComponentFixture<VmlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmlHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
