import { TestBed, inject } from '@angular/core/testing';

import { LoadingBlockServiceService } from './loading-block.service';

describe('LoadingBlockServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingBlockServiceService]
    });
  });

  it('should be created', inject([LoadingBlockServiceService], (service: LoadingBlockServiceService) => {
    expect(service).toBeTruthy();
  }));
});
