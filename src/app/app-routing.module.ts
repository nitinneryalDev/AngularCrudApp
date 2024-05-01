import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './fruits/create/create.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'fruits/home',
    pathMatch: 'full',
  }  ,
  { path: 'fruits/create', component: CreateComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
