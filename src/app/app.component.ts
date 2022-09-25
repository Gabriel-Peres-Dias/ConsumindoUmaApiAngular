import { Component, OnInit } from '@angular/core';
import { FrutaService } from './service/fruta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttp';

  constructor( private frutaService: FrutaService ){}

  obterFrutas() {
    this.frutaService.obterFrutas()
    .then(frutas => console.log(frutas))
    .catch(erro => console.log(erro))
  }

}
