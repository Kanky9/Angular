import { Component } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent {
  title: string = "Local Reference";

  titulo: string = "Listado de Personas";

  personas: Persona[] = [
    new Persona('Santino', 'Bournot'),
    new Persona('Luli', 'Zarco')
  ];

  /* 
    De esta manera intercomunicamos los componentes entre si.
    en html se monitorea el evento del comp hijo, y usando el metodo personaAgregada, cuando se cumpla el evento se le envian los datos.
  */
  personaAgregada(persona: Persona) {
    this.personas.push(persona); 
  }
}