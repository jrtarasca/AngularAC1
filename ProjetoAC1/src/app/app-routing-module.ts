import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcMedia } from './calc-media/calc-media';
import { ConversTemp } from './convers-temp/convers-temp';
import { ApoliceSeg } from './apolice-seg/apolice-seg';
import { CalcIMC } from './calc-imc/calc-imc';

const routes: Routes = [
  {path: 'CalcMedia', component: CalcMedia},
  {path: 'ConversTemp', component: ConversTemp},
  {path: 'ApoliceSeg', component: ApoliceSeg},
  {path: 'CalcIMC', component: CalcIMC}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
