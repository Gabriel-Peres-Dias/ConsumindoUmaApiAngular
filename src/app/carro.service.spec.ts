import { TestBed } from '@angular/core/testing';

import { CarroServiceService } from './carro.service';

describe('CarroServiceService', () => {
  let service: CarroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
