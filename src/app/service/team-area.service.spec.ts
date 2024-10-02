import { TestBed } from '@angular/core/testing';

import { TeamAreaService } from './team-area.service';

describe('TeamAreaService', () => {
  let service: TeamAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
