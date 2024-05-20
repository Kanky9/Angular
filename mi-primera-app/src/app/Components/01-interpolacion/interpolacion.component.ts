import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class interpolacionComponent {
  title: string = "Interpolación"

  nombre: string = 'Santino';
  apellido: string = "Bournot";
  edad: number = 20; 

  /* Declaracion privada: 

    private edad: number = 20; 

    getEdad(): number{
      return this.edad;
    }

    para llamarlo por interpolacion solo hay q poner el nombre del metodo {{getEdad()}}
  */

}