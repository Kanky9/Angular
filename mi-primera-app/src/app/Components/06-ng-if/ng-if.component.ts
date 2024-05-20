import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  title: string = "NgIf"; 

  //Si esta en false, el boton se habilita 
  deshabilitar: boolean = false;
  mensaje: string = '';
  titulo: string = 'Ingeniero';
  mostrar: boolean = false; 


  /* Metodo que cambia el valor de mensaje y de mostrar */
  agregarPersona() {
    this.mostrar = true; 
    this.mensaje = 'Persona agregada'; 
  }

  /* Target hace referencia al html, en este caso al input, para que event lo capture es necesario convertirlo (con los <>) y luego con value se manda el valor asignándoselo a titulo*/
  modificarTitulo(event: Event) {
    console.log('Entrando a método modificar titulo'); 
    this.titulo = (<HTMLInputElement>event.target).value; 
  }
}