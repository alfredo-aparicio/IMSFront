import { TestBed } from '@angular/core/testing';

import { Readapi } from './readapi';

describe('Readapi', () => {
  let service: Readapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Readapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
