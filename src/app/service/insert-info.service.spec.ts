import { TestBed } from '@angular/core/testing';

import { InsertInfoService } from './insert-info.service';

describe('InsertInfoService', () => {
  let service: InsertInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
