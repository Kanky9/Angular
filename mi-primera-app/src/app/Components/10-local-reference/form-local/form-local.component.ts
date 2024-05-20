import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';
import { LogginService } from 'src/app/Services/LogginService.service';

@Component({
  selector: 'app-form-local',
  templateUrl: './form-local.component.html',
  styleUrls: ['./form-local.component.css'],
  providers:[LogginService] /* al ponerlo aca solo funciona en este componente, pero si creamos el servicio por consola se guarda automatico en app.module */
})
export class FormLocalComponent implements OnInit{
  title: string = "Formulario Local Reference"; 

  /*
    Inyectamos la instancia de logginService
  */
  constructor( private logginService: LogginService ) { }
  
  ngOnInit(): void {

  }

  /* Se crea personaCreada, para llevar los datos al comp padre, usando también EventEmitter, el cual crea un evento de la información que vamos a intercambiar, y como lo que vamos a intercambiar es de tipo Persona, se lo indicamos con <>*/
  @Output() personaCreada = new EventEmitter<Persona>();
  
  /*
    con este decorador recibimos nombreInput y apellidoInput desde el formulario y le asignamos otra variable, en este caso tiene el mismo nombre pero no es necesario, y le decimos que es de tipo ElementRef, lo cual
  */
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  
  /*
    Para enviar los datos con viewChild, tenemos que agregarle el metodo nativeElement y luego value
  */
  agregarPersona() {
    let newPersona = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    
    this.logginService.enviarMensajeAConsola("Enviamos persona: " + newPersona.nombre + " " + newPersona.apellido); 

    this.personaCreada.emit(newPersona);
  }

  /*
    Se crea una var local, la cual almacena los datos de Persona, y luego los emite a personaCreada con emit para que esta envie los datos.
    Creamos dos parametros y le decimos que son de tipo html, ya que hacen referencia al input, luego en la var local le debemos poner value para que envie el valor.
  */ /* Esta manera sirve sin el viewChild
  agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement) {
    let newPersona = new Persona(nombreInput.value, apellidoInput.value); 
    this.personaCreada.emit(newPersona);
  }*/
}