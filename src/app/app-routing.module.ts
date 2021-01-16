import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearUasuarioComponent } from './crear-uasuario/crear-uasuario.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { ActualizarPersonasComponent } from './actualizar-personas/actualizar-personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';

const routes: Routes = [
  {path: 'crearPersona', component: CrearUasuarioComponent},
  {path: 'listaPersonas', component: ListaPersonasComponent},
  {path: 'actualizarPersona', component: ActualizarPersonasComponent},
  {path: 'DeatllePersona', component: DetallePersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
