import { Component, OnInit } from '@angular/core';
import { Colores } from 'src/app/models/ConsultaResponse';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  listadoColores: Array<Colores> = [];
  hex: string="";

  constructor(private backend: BackendService,
              private router: Router) { }

  ngOnInit(): void {
    this.backend.consulta().subscribe(
      x => {
        this.listadoColores = x.colores;


        let rojo = this.listadoColores.map(t=>t.rojo);
        let verde = this.listadoColores.map(t=>t.verde);
        let azul = this.listadoColores.map(t=>t.azul);

        for (let i = 0; i < rojo.length; i++) {
          this.hex = this.rgbToHex(rojo[i],verde[i],azul[i]);
        }

        //

      }
    )
  }

  componentToHex(color:number) {
    var hexC = color.toString(16);
    return hexC.length == 1 ? "0" + hexC : hexC;
  }
  rgbToHex(rojo:number, verde:number, azul:number) {
    return "#" + this.componentToHex(rojo) + this.componentToHex(verde) + this.componentToHex(azul);
  }

}
