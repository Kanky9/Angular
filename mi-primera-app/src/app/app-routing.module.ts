import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { interpolacionComponent } from './Components/01-interpolacion/interpolacion.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/00-inicio/inicio.component'; 
import { TemplateReferenceVariableComponent } from './Components/02-template-reference-variable/template-reference-variable.component';
import { PropertyBindingComponent } from './Components/03-property-binding/property-binding.component';
import { EventBindingComponent } from './Components/04-event-binding/event-binding.component';
import { TwoWayBindingComponent } from './Components/05-two-way-binding/two-way-binding.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { NgIfComponent } from './Components/06-ng-if/ng-if.component';
import { NgForComponent } from './Components/07-ng-for/ng-for.component';
import { PropertyBindingEntreComponentesComponent } from './Components/08-property-binding-entre-componentes/property-binding-entre-componentes.component'; 
import { EventBindingEntreComponentesComponent } from './Components/09-event-binding-entre-componentes/event-binding-entre-componentes.component';
import { LocalReferenceComponent } from './Components/10-local-reference/local-reference.component';
import { DataServiceComponent } from './Components/11-data-service/data-service.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },

  {
    path: 'interpolacion',
    component: interpolacionComponent
  },

  {
    path: 'templateReferenceVariable',
    component: TemplateReferenceVariableComponent 
  },

  {
    path: 'propertyBinding',
    component: PropertyBindingComponent 
  },

  {
    path: 'eventBinding',
    component: EventBindingComponent 
  },

  {
    path: 'twoWayBinding',
    component: TwoWayBindingComponent 
  },

  {
    path: 'calculadora',
    component: CalculadoraComponent 
  },

  {
    path: 'ngIf',
    component: NgIfComponent 
  },

  {
    path: 'ngFor',
    component: NgForComponent 
  },

  {
    path: 'PBComponentes',
    component: PropertyBindingEntreComponentesComponent
  },

  {
    path: 'EBComponentes',
    component: EventBindingEntreComponentesComponent
  },

  {
    path: 'localReference',
    component: LocalReferenceComponent
  },

  {
    path: 'dataService',
    component: DataServiceComponent
  },

  {
    path: "**",
    component: InicioComponent
  }
];
/*
  cuando se le pone ** al path, quiere decir que cuando la ruta este vacía, se va a dirigir a ese componente. Es necesario que esté al final.
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
