import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';

@NgModule({
  declarations: [
    AppComponent,
    SubirArchivoComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
