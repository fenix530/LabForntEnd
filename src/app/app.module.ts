import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearUasuarioComponent } from './crear-uasuario/crear-uasuario.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { ActualizarPersonasComponent } from './actualizar-personas/actualizar-personas.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/service.service';
import { HttpClientModule } from '@angular/common/http';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearUasuarioComponent,
    ListaPersonasComponent,
    ActualizarPersonasComponent,
    DetallePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
