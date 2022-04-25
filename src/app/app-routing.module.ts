import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { RecueilDesPrixComponent } from './recueil-des-prix/recueil-des-prix.component';

const routes: Routes = [
  {path:'recherche', component:ContentComponent},
  {path:'recueil', component:RecueilDesPrixComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
