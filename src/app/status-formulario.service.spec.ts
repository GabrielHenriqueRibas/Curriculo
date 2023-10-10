import { TestBed } from '@angular/core/testing';

import { EstadoComponenteService } from './status-formulario.service';

describe('StatusFormularioService', () => {
  let service: EstadoComponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoComponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
