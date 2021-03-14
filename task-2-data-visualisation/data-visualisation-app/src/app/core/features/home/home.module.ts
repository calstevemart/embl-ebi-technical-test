import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
