import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudConsumerComponent } from "./crud-consumer.component";

const routes: Routes = [
    {
        path: '',
        component: CrudConsumerComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrudConsumerRoutingModule {}