import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { CalcMedia } from './calc-media/calc-media';
import { ApoliceSeg } from './apolice-seg/apolice-seg';
import { ConversTemp } from './convers-temp/convers-temp';
import { CalcIMC } from './calc-imc/calc-imc';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    CalcMedia,
    ApoliceSeg,
    ConversTemp,
    CalcIMC
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
