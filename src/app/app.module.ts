import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarcomponentComponent } from './homepagecomponent/navbarcomponent/navbarcomponent.component';
import { FootercomponentComponent } from './homepagecomponent/footercomponent/footercomponent.component';
import { HerocomponentComponent } from './homepagecomponent/herocomponent/herocomponent.component';
import { AboutcomponentComponent } from './homepagecomponent/aboutcomponent/aboutcomponent.component';
import { ClientscomponentComponent } from './homepagecomponent/clientscomponent/clientscomponent.component';
import { ServicescomponentComponent } from './homepagecomponent/servicescomponent/servicescomponent.component';
import { PortfoliocomponentComponent } from './homepagecomponent/portfoliocomponent/portfoliocomponent.component';
import { HomepagecomponentComponent } from './homepagecomponent/homepagecomponent.component';
import { TestComponent } from './homepagecomponent/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarcomponentComponent,
    FootercomponentComponent,
    HerocomponentComponent,
    AboutcomponentComponent,
    ClientscomponentComponent,
    ServicescomponentComponent,
    PortfoliocomponentComponent,
    HomepagecomponentComponent,
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
