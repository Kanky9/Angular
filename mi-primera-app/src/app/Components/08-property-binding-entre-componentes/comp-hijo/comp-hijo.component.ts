import { Component,OnInit , Input } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';

@Component({
  selector: 'app-comp-hijo',
  templateUrl: './comp-hijo.component.html',
  styleUrls: ['./comp-hijo.component.css']
})
export class CompHijoComponent implements OnInit{
  title: string = "Componente hijo"; 

  @Input() persona!: Persona; 
  @Input() indice!: number; 

  ngOnInit(): void {
    
  }
}

/* Con el método Input llamamos a estas variables de el componente padre y las inicializamos aca, para mostrarlas luego en el html. */