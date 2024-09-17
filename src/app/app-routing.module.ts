import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  {path: "consulta", component: ConsultaComponent},
  {path: "ingreso", component: IngresoComponent},
  {path: "menu", component: MenuComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
