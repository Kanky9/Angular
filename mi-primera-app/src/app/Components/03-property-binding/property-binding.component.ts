import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  title: string = "Property Binding";

  //Si esta en false, el boton se habilita 
  deshabilitar: boolean = true; 
}