import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkCardComponent } from './components/work-card/work-card.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { EditPannelComponent } from './components/edit-pannel/edit-pannel.component';
import { AddBtnComponent } from './components/common/add-btn/add-btn.component';
import { ModalComponent } from './components/common/modal/modal.component';
import { ArgProgLogoComponent } from './components/common/arg-prog-logo/arg-prog-logo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FrontPageComponent,
    AboutMeComponent,
    SeparatorComponent,
    StudiesComponent,
    ExperienceComponent,
    FooterComponent,
    WorkCardComponent,
    PortfolioComponent,
    LoginComponent,
    HomeComponent,
    EditPannelComponent,
    AddBtnComponent,
    ModalComponent,
    ArgProgLogoComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
