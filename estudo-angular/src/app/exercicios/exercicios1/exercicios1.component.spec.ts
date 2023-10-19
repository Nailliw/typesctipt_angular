import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios1Component } from './exercicios1.component';

describe('Exercicios1Component', () => {
  let component: Exercicios1Component;
  let fixture: ComponentFixture<Exercicios1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercicios1Component]
    });
    fixture = TestBed.createComponent(Exercicios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
