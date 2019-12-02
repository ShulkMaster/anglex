import { TestBed } from '@angular/core/testing';

import { DatamonService } from './datamon.service';

describe('DatamonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatamonService = TestBed.get(DatamonService);
    expect(service).toBeTruthy();
  });
});
