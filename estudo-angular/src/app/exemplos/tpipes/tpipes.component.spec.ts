import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpipesComponent } from './tpipes.component';

describe('TpipesComponent', () => {
  let component: TpipesComponent;
  let fixture: ComponentFixture<TpipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TpipesComponent]
    });
    fixture = TestBed.createComponent(TpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
