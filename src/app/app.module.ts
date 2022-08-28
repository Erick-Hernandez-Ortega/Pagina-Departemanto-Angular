import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PlanDeEstudiosComponent } from './componentes/plan-de-estudios/plan-de-estudios.component';
import { IndexComponentComponent } from './componentes/index-component/index-component.component';
import { HeaderComponentComponent } from './componentes/header-component/header-component.component';
import { ConvocatoriasComponent } from './componentes/convocatorias/convocatorias.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    FooterComponent,
    PlanDeEstudiosComponent,
    IndexComponentComponent,
    HeaderComponentComponent,
    ConvocatoriasComponent,
    CursosComponent,
    VideosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
