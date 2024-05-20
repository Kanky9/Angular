import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  title: string ="Event Binding"

  //Si esta en false, el boton se habilita 
  deshabilitar: boolean = false;
  mensaje: string = 'No se ha agregado ninguna persona'; 
  titulo: string = 'Ingeniero';

  /* Metodo que cambia el valor de mensaje */
  agregarPersona() {
    this.mensaje = 'Persona agregada'; 
  }

  /* Target hace referencia al html, en este caso al input, para que event lo capture es necesario convertirlo (con los <>) y luego con value se manda el valor asignándoselo a titulo*/
  modificarTitulo(event: Event) {
    console.log('Entrando a método modificar titulo'); 
    this.titulo = (<HTMLInputElement>event.target).value; 
  }
}