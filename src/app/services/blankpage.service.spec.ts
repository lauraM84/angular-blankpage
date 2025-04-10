import { TestBed } from '@angular/core/testing';

import { BlankpageService } from './blankpage.service';

describe('BlankpageService', () => {
  let service: BlankpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlankpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
