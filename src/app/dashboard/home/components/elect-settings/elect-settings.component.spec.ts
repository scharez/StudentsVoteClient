import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectSettingsComponent } from './elect-settings.component';

describe('ElectSettingsComponent', () => {
  let component: ElectSettingsComponent;
  let fixture: ComponentFixture<ElectSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
