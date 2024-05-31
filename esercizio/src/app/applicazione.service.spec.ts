import { TestBed } from '@angular/core/testing';

import { ApplicazioneService } from './applicazione.service';

describe('ApplicazioneService', () => {
  let service: ApplicazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
