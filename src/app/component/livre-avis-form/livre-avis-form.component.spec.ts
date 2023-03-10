import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreAvisFormComponent } from './livre-avis-form.component';

describe('LivreAvisFormComponent', () => {
  let component: LivreAvisFormComponent;
  let fixture: ComponentFixture<LivreAvisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreAvisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreAvisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
