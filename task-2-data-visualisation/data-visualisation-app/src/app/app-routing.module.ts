import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'graphs',
        loadChildren: () =>
          import('./core/features/graphs/graphs.module').then(
            (m) => m.GraphsModule
          ),
      },
      {
        path: 'terminal',
        loadChildren: () =>
          import('./core/features/terminal/terminal.module').then(
            (m) => m.TerminalModule
          ),
      },
      {
        path: 'machines',
        loadChildren: () =>
          import('./core/features/machines/machines.module').then(
            (m) => m.MachinesModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./core/features/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
