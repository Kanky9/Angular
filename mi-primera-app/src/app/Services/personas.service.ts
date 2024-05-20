import { Persona } from '../Models/persona.model';
import { LogginService } from './LogginService.service';import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private logginService: LogginService) { }

  personas: Persona[] = [
    new Persona('Santino', 'Bournot'),
    new Persona('Luli', 'Zarco')
  ];

  
  msj = new EventEmitter<number>();

  agregarPersona(persona: Persona) {
    this.logginService.enviarMensajeAConsola("Enviamos persona: " + persona.nombre + " " + persona.apellido); 
    this.personas.push(persona);
  }
}