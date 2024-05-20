import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  title: string = "Formulario"; 

  /* Se crea personaCreada, para llevar los datos al comp padre, usando también EventEmitter, el cual crea un evento de la información que vamos a intercambiar, y como lo que vamos a intercambiar es de tipo Persona, se lo indicamos con <>*/
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';

  /*
    Se crea una var local, la cual almacena los datos de Persona, y luego los emite a personaCreada con emit para que esta envie los datos.
  */
  agregarPersona() {
    let newPersona = new Persona(this.nombreInput, this.apellidoInput); 
    this.personaCreada.emit(newPersona);
  }
}