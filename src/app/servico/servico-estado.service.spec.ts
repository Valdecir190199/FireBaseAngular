import { TestBed } from '@angular/core/testing';

import { ServicoEstadoService } from './servico-estado.service';

describe('ServicoEstadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoEstadoService = TestBed.get(ServicoEstadoService);
    expect(service).toBeTruthy();
  });
});
