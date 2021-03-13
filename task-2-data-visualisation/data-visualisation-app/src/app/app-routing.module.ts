import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
