import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreItemComponent } from './livre-item.component';

describe('LivreItemComponent', () => {
  let component: LivreItemComponent;
  let fixture: ComponentFixture<LivreItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
