import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsettingsComponent } from './profilsettings.component';

describe('ProfilsettingsComponent', () => {
  let component: ProfilsettingsComponent;
  let fixture: ComponentFixture<ProfilsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
