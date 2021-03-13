import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { PageTemplateComponent } from '../template/page-template/page-template.component';
import { GraphsModule } from './features/graphs/graphs.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PageTemplateComponent],
  imports: [CommonModule, AppRoutingModule, GraphsModule, HttpClientModule],
  exports: [AppRoutingModule, PageTemplateComponent],
})
export class CoreModule {}
