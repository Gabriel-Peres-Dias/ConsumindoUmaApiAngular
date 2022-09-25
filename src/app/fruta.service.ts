import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API } from 'src/environments/environment';
import { FrutaInterface } from './frutaInterface';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  constructor( private httpCliente: HttpClient) { }

  obterFrutas() {
    return this.httpCliente.get<FrutaInterface[]>(`${API}frutas`).toPromise();
  }
}
