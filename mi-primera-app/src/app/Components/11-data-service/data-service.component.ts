import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';
import { PersonasService } from 'src/app/Services/personas.service';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnInit{
  title: string = "Data Service";

  /*
    Inyectamos la instancia de personaService
  */
  constructor ( private personaService: PersonasService ) { }

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  titulo: string = "Listado de Personas";

  personas: Persona[] = [];
}