import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';  // mod

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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())  // mod
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
