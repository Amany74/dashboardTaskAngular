import { TestBed } from '@angular/core/testing';

import { DasboardDataService } from './dasboard-data.service';

describe('DasboardDataService', () => {
  let service: DasboardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DasboardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
