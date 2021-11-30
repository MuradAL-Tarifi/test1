import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcomponentComponent } from '../homepagecomponent/aboutcomponent/aboutcomponent.component';
import { FootercomponentComponent } from '../homepagecomponent/footercomponent/footercomponent.component';
import { HomepagecomponentComponent } from '../homepagecomponent/homepagecomponent.component';
import { NavbarcomponentComponent } from '../homepagecomponent/navbarcomponent/navbarcomponent.component';
import { PortfoliocomponentComponent } from '../homepagecomponent/portfoliocomponent/portfoliocomponent.component';
import { ServicescomponentComponent } from '../homepagecomponent/servicescomponent/servicescomponent.component';

const routes: Routes = [
  {
    path: '',
    component: HomepagecomponentComponent,
  },
  {
    path: 'Services',
    component: ServicescomponentComponent,
  },
  {
    path: 'About',
    component: AboutcomponentComponent,
  },
  {
    path: 'Portfolio',
    component: PortfoliocomponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomelazyRoutingModule {}
