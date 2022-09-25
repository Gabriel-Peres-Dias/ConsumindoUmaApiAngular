import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API } from 'src/environments/environment';
import { CarroInterface } from './carroInterface';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor( private httpCliente: HttpClient) { }

  obterCarros() {
    return this.httpCliente.get<CarroInterface[]>(`${API}carros`).toPromise();
  }
}
