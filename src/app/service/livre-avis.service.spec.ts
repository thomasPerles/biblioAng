import { TestBed } from '@angular/core/testing';

import { LivreAvisService } from './livre-avis.service';

describe('LivreAvisService', () => {
  let service: LivreAvisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreAvisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
