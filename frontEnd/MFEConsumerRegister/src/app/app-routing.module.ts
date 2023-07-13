import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfeConsumer',
    loadChildren: () => import('./presentation/modules/crud-consumer/crud-consumer.module').then((module) =>  module.CrudConsumerModule)
  },
  {
    path: 'includeConsumer',
    loadChildren: () => import('./presentation/modules/include-new-consumer/include-new-consumer.module').then((module) =>  module.IncludeNewConsumerModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mfeConsumer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
