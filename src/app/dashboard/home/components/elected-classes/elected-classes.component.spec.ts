import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectedClassesComponent } from './elected-classes.component';

describe('ElectedClassesComponent', () => {
  let component: ElectedClassesComponent;
  let fixture: ComponentFixture<ElectedClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectedClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectedClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
