import { TestBed } from '@angular/core/testing';

import { DataZadService } from './data-zad.service';

describe('DataZadService', () => {
  let service: DataZadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataZadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
