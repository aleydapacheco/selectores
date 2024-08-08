import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Esta construccion de ruteo de dependencias es para que 
//puedan reconocerse las rutas hijas
const routes: Routes = [
  { path: 'selector', 
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  { 
    path: '**',
    redirectTo: 'selector'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
