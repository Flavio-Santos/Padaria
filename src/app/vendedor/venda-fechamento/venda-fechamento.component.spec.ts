import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaFechamentoComponent } from './venda-fechamento.component';

describe('VendaFechamentoComponent', () => {
  let component: VendaFechamentoComponent;
  let fixture: ComponentFixture<VendaFechamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaFechamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaFechamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
