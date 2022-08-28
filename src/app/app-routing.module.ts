import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ConvocatoriasComponent } from './componentes/convocatorias/convocatorias.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { IndexComponentComponent } from './componentes/index-component/index-component.component';
import { PlanDeEstudiosComponent } from './componentes/plan-de-estudios/plan-de-estudios.component';
import { VideosComponent } from './componentes/videos/videos.component';

const routes: Routes = [
  {path: "Plan de estudios", component: PlanDeEstudiosComponent},
  {path: "", component: IndexComponentComponent},
  {path: "Convocatorias", component:ConvocatoriasComponent},
  {path: "Cursos", component: CursosComponent},
  {path: "Videos", component: VideosComponent},
  {path: "Contacto", component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
