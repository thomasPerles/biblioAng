import { TestBed } from '@angular/core/testing';

import { LivreExemplaireService } from './livre-exemplaire.service';

describe('LivreExemplaireService', () => {
  let service: LivreExemplaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreExemplaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
