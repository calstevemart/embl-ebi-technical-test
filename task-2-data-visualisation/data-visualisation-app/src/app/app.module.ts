import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTemplateComponent } from './template/page-template/page-template.component';
import { GraphsModule } from './core/features/graphs/graphs.module';
import { CoreModule } from './core/core.module';
import * as $ from "jquery";
import * as d3 from 'd3';
// import * as chart from 'chart.js'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 