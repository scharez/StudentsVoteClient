import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCandidatesComponent } from './create-candidate.component';

describe('UpdateComponent', () => {
  let component: UpdateCandidatesComponent;
  let fixture: ComponentFixture<UpdateCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
