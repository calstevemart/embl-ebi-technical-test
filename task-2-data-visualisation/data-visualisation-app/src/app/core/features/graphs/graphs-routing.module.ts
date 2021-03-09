import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GraphWrapperComponent } from "./views/graph-wrapper/graph-wrapper.component";

const routes: Routes = [
    {
        path: '',
        component: GraphWrapperComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GraphsRoutingModule {}