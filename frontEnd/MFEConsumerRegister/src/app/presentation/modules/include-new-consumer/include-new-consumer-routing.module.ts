import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IncludeNewConsumerComponent } from "./include-new-consumer.component";

const routes: Routes = [
    {
        path: '',
        component: IncludeNewConsumerComponent
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
export class IncludeNewConsumerRoutingModule {}