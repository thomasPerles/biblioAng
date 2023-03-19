import { TestBed } from '@angular/core/testing';

import { LivreEmpruntService } from './livre-emprunt.service';

describe('LivreEmpruntService', () => {
  let service: LivreEmpruntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreEmpruntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
