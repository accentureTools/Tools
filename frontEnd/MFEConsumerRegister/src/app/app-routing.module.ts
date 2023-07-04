import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crudConsumer',
    loadChildren: () => import('./presentation/modules/crud-consumer/crud-consumer.module').then((module) =>  module.CrudConsumerModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'crudConsumer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
