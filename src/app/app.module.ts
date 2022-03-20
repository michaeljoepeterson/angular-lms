import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScormService } from './services/scorm.service';
import { ScormServiveFactory } from './services/scorm.service.provider';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:ScormService,
      useFactory:ScormServiveFactory,
      deps:[HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
