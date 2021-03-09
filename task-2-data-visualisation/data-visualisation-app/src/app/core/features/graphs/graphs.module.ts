import { NgModule } from "@angular/core";
import { SpectraGraphComponent } from "./components/spectra-graph/spectra-graph.component";
import { GraphsRoutingModule } from "./graphs-routing.module";
import { GraphWrapperComponent } from "./views/graph-wrapper/graph-wrapper.component";

@NgModule({
    declarations: [GraphWrapperComponent, SpectraGraphComponent],
    imports: [GraphsRoutingModule],
    exports: [GraphWrapperComponent, SpectraGraphComponent],

}) 
export class GraphsModule {}