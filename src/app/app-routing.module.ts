import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./app/app.module')
      .then(m => m.AppModule),
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
