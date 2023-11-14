import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFormularioComponent } from './cadastro-formulario.component';

describe('CadastroFormularioComponent', () => {
  let component: CadastroFormularioComponent;
  let fixture: ComponentFixture<CadastroFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFormularioComponent]
    });
    fixture = TestBed.createComponent(CadastroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
