import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreEmpruntFormComponent } from './livre-emprunt-form.component';

describe('LivreEmpruntFormComponent', () => {
  let component: LivreEmpruntFormComponent;
  let fixture: ComponentFixture<LivreEmpruntFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreEmpruntFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreEmpruntFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
