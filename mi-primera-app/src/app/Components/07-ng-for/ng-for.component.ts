import { Component } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  title: string = "Ngfor";

  titulo: string = "Listado de Personas";

  personas: Persona[] = [
    new Persona('Santino', 'Bournot'),
    new Persona('Luli', 'Zarco')
  ];

  nombreInput: string = '';
  apellidoInput: string = '';

  /* Se agrega una nueva persona con el método push */
  agregarPersona() {
    let newPersona = new Persona(this.nombreInput, this.apellidoInput); 
    this.personas.push(newPersona); 
  }
}