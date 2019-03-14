import { TestBed } from '@angular/core/testing';

import { RoleguardService } from './roleguard.service';

describe('RoleguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleguardService = TestBed.get(RoleguardService);
    expect(service).toBeTruthy();
  });
});
