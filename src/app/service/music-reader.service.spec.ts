import { TestBed } from '@angular/core/testing';

import { MusicReaderService } from './music-reader.service';

describe('MusicReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicReaderService = TestBed.get(MusicReaderService);
    expect(service).toBeTruthy();
  });
});
