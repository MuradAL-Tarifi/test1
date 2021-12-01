import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootercomponentComponent } from './homepagecomponent/footercomponent/footercomponent.component';
import { TestComponent } from './homepagecomponent/test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./homelazy/homelazy-routing.module').then(
        (m) => m.HomelazyRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
