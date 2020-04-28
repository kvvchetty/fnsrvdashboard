import { TestBed } from '@angular/core/testing';

import { PayeesService } from './payees.service';

describe('PayeesService', () => {
  let service: PayeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
