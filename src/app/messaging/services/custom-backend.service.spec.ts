import { TestBed } from '@angular/core/testing';

import { CustomBackendService } from './custom-backend.service';

describe('CustomBackendService', () => {
  let service: CustomBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
