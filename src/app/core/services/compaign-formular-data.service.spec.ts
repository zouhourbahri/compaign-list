import { TestBed } from '@angular/core/testing';

import { CompaignFormularDataService } from './compaign-formular-data.service';

describe('CompaignFormularDataService', () => {
  let service: CompaignFormularDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaignFormularDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
