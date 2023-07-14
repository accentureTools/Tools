import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UpdateConsumerComponent } from "./update-consumer.component";

const routes: Routes = [
    {
        path: '',
        component: UpdateConsumerComponent
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
export class UpdateConsumerRoutingModule {}