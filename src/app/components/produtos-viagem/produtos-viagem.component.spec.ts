import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosViagemComponent } from './produtos-viagem.component';

describe('ProdutosViagemComponent', () => {
  let component: ProdutosViagemComponent;
  let fixture: ComponentFixture<ProdutosViagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosViagemComponent]
    });
    fixture = TestBed.createComponent(ProdutosViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
