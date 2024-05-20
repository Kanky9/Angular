import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-comp-hijo-data',
  templateUrl: './comp-hijo-data.component.html',
  styleUrls: ['./comp-hijo-data.component.css']
})
export class CompHijoDataComponent {
  title: string = "Componente hijo Data Service"; 

  @Input() persona!: Persona; 
  @Input() indice!: number; 

  constructor (private personaService: PersonasService) {}

  ngOnInit(): void {
    
  }

  mostrarIndice() {
    this.personaService.msj.emit(this.indice);
  }
}

/* Con el método Input llamamos a estas variables de el componente padre y las inicializamos aca, para mostrarlas luego en el html. */  