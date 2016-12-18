/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PuppiesService } from './puppies.service';

describe('PuppiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuppiesService]
    });
  });

  it('should ...', inject([PuppiesService], (service: PuppiesService) => {
    expect(service).toBeTruthy();
  }));
});
