import { ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';
import { LogginService } from 'src/app/Services/LogginService.service';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent {
title: string = "Formulario Data Service"; 

  /*
    Inyectamos la instancia de PersonaService
    nos suscribimos a msj, para enviarl el mensaje hacia el servicio, y que haga la conección para mostrarlo
  */
  constructor(private personaService: PersonasService) {
    this.personaService.msj.subscribe(
      (indice: number) => alert("El índice es: " + indice)
    );
  }
  
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
  onAgregarPersona() {
    let newPersona = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );

    this.personaService.agregarPersona(newPersona);
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