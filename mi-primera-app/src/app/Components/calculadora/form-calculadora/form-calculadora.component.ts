import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-calculadora',
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.css']
})
export class FormCalculadoraComponent {
  num1: number; 
  num2: number;   
  
  /*
    Creamos la var resultadoFinal, con el metodo eventEmitter para que vea el evento y lo envie al componente padre, y le asignamos que va a ser de tipo number con <>. 
  */
  @Output() resultadoFinal = new EventEmitter<number>();

  /* 
    creamos una variable local (resultado), en la cual realizamos la operación, y luego se la emitimos con emit a resultadoFinal, para que este la lleve como un evento al componente padre.
  */
  Sumar() {
    let resultado = this.num1 + this.num2;
    this.resultadoFinal.emit(resultado);
  }

  Restar() {
    let resultado = this.num1 - this.num2;
    this.resultadoFinal.emit(resultado); 
  }

  Multiplicar() {
    let resultado = this.num1 * this.num2;
    this.resultadoFinal.emit(resultado);
  }

  Dividir() {
    let resultado = this.num1 / this.num2;
    this.resultadoFinal.emit(resultado);
  }
}