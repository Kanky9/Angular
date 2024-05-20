import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-comp-hijo-event',
  templateUrl: './comp-hijo-event.component.html',
  styleUrls: ['./comp-hijo-event.component.css']
})
export class CompHijoEventComponent {
  title: string = "Componente hijo"; 

  @Input() persona!: Persona; 
  @Input() indice!: number; 

  ngOnInit(): void {
    
  }
}

/* Con el método Input llamamos a estas variables de el componente padre y las inicializamos aca, para mostrarlas luego en el html. */