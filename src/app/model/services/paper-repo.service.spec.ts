import { TestBed } from '@angular/core/testing';

import { PaperRepoService } from './paper-repo.service';

describe('PaperRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperRepoService = TestBed.get(PaperRepoService);
    expect(service).toBeTruthy();
  });
});
