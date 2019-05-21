import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingresultsComponent } from './votingresults.component';

describe('VotingresultsComponent', () => {
  let component: VotingresultsComponent;
  let fixture: ComponentFixture<VotingresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
