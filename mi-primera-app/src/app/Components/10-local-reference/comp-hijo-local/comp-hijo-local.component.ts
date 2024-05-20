import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-comp-hijo-local',
  templateUrl: './comp-hijo-local.component.html',
  styleUrls: ['./comp-hijo-local.component.css']
})
export class CompHijoLocalComponent {
  title: string = "Componente hijo Local Reference"; 

  @Input() persona!: Persona; 
  @Input() indice!: number; 

  ngOnInit(): void {
    
  }
}

/* Con el método Input llamamos a estas variables de el componente padre y las inicializamos aca, para mostrarlas luego en el html. */