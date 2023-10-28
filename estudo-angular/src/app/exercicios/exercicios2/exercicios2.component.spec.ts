import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios2Component } from './exercicios2.component';

describe('Exercicios2Component', () => {
  let component: Exercicios2Component;
  let fixture: ComponentFixture<Exercicios2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercicios2Component]
    });
    fixture = TestBed.createComponent(Exercicios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
