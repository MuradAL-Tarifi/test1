import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootercomponentComponent } from './homepagecomponent/footercomponent/footercomponent.component';
import { HomepagecomponentComponent } from './homepagecomponent/homepagecomponent.component';
import { NavbarcomponentComponent } from './homepagecomponent/navbarcomponent/navbarcomponent.component';

const routes: Routes = [
  {
    path: 'Home',
    loadChildren: () =>
      import('./homelazy/homelazy-routing.module').then(
        (m) => m.HomelazyRoutingModule
      ),
  },
  {
    path: 'footer',
    component: FootercomponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
