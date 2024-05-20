import { Component } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-property-binding-entre-componentes',
  templateUrl: './property-binding-entre-componentes.component.html',
  styleUrls: ['./property-binding-entre-componentes.component.css']
})
export class PropertyBindingEntreComponentesComponent {
  title: string = "Property Binding entre Componentes";

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