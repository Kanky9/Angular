import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/00-inicio/inicio.component';
import { interpolacionComponent } from './Components/01-interpolacion/interpolacion.component';
import { TemplateReferenceVariableComponent } from './Components/02-template-reference-variable/template-reference-variable.component';
import { PropertyBindingComponent } from './Components/03-property-binding/property-binding.component';
import { EventBindingComponent } from './Components/04-event-binding/event-binding.component';
import { TwoWayBindingComponent } from './Components/05-two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { NgIfComponent } from './Components/06-ng-if/ng-if.component';
import { NgForComponent } from './Components/07-ng-for/ng-for.component';
import { PropertyBindingEntreComponentesComponent } from './Components/08-property-binding-entre-componentes/property-binding-entre-componentes.component';
import { CompHijoComponent } from './Components/08-property-binding-entre-componentes/comp-hijo/comp-hijo.component';
import { EventBindingEntreComponentesComponent } from './Components/09-event-binding-entre-componentes/event-binding-entre-componentes.component';
import { CompHijoEventComponent } from './Components/09-event-binding-entre-componentes/comp-hijo-event/comp-hijo-event.component'; 
import { FormularioComponent } from './Components/09-event-binding-entre-componentes/formulario/formulario.component'; 
import { ResultadoComponent } from './Components/calculadora/resultado/resultado.component';
import { FormCalculadoraComponent } from './Components/calculadora/form-calculadora/form-calculadora.component';
import { LocalReferenceComponent } from './Components/10-local-reference/local-reference.component'; 
import { CompHijoLocalComponent } from './Components/10-local-reference/comp-hijo-local/comp-hijo-local.component'; 
import { FormLocalComponent } from './Components/10-local-reference/form-local/form-local.component'; 
import { DataServiceComponent } from './Components/11-data-service/data-service.component'; 
import { CompHijoDataComponent } from './Components/11-data-service/comp-hijo-data/comp-hijo-data.component'; 
import { FormDataComponent } from './Components/11-data-service/form-data/form-data.component'; 
import { PersonasService } from './Services/personas.service';
import { LogginService } from './Services/LogginService.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    interpolacionComponent,
    TemplateReferenceVariableComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CalculadoraComponent,
    NgIfComponent,
    NgForComponent,
    PropertyBindingEntreComponentesComponent,
    CompHijoComponent,
    EventBindingEntreComponentesComponent,
    CompHijoEventComponent,
    FormularioComponent,
    ResultadoComponent,
    FormCalculadoraComponent,
    LocalReferenceComponent,
    CompHijoLocalComponent,
    FormLocalComponent,
    DataServiceComponent,
    CompHijoDataComponent,
    FormDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LogginService,
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }