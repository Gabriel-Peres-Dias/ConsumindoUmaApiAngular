import { Component, OnInit } from '@angular/core';
import { CarroService } from './carro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttp';

  constructor( private carroService: CarroService ){}

  obterCarros() {
    this.carroService.obterCarros()
    .then(carros => console.log(carros))
    .catch( erro => console.log(erro))
  }

}
