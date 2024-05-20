import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  title: string = "Calculadora"

  resultadoPadre: number; 

  /*
    con este metodo mandamos el resultado a resultadoFinal, el cual va a interconectar los eventos para que se realice la operacion que se encuentra en el comp hijo (form-calculadora).
  */
  procesarResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }
}