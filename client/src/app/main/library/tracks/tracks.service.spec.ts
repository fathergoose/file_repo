/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TracksService } from './tracks.service';

describe('TracksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TracksService]
    });
  });

  it('should ...', inject([TracksService], (service: TracksService) => {
    expect(service).toBeTruthy();
  }));
});
