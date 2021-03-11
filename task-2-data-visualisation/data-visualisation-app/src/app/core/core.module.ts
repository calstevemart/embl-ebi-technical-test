import { CommonModule } from "@angular/common";
import { NgModule} from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { PageTemplateComponent } from "../template/page-template/page-template.component";
import { GraphsModule } from "./features/graphs/graphs.module";

@NgModule({
    declarations: [PageTemplateComponent],
    imports: [CommonModule, AppRoutingModule, GraphsModule],
    exports: [AppRoutingModule, PageTemplateComponent]
})
export class CoreModule {}