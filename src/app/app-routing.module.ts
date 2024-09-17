import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConversionComponent } from './conversion/conversion.component';

const routes: Routes = [
  {path:"", component: CalculadoraComponent },
  {path:"conversion", component: ConversionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
