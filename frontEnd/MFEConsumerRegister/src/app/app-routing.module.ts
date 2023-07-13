import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environment/environment';

const routes: Routes = [
  {
    path: environment.routerPaths.mfeConsumerMain,
    loadChildren: () => import('./presentation/modules/crud-consumer/crud-consumer.module').then((module) =>  module.CrudConsumerModule)
  },
  {
    path: environment.routerPaths.includeConsumer,
    loadChildren: () => import('./presentation/modules/include-new-consumer/include-new-consumer.module').then((module) =>  module.IncludeNewConsumerModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: environment.routerPaths.mfeConsumerMain
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
