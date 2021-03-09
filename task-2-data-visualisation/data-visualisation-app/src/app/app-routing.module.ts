import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTemplateComponent } from './template/page-template/page-template.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'graphs',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PageTemplateComponent,
    data: {
      title: 'EMBL EBI Technical Test Dashboard'
    },
    children: [
      {
        path: 'graphs',
        loadChildren: () => import('./core/features/graphs/graphs.module').then((m) => m.GraphsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
