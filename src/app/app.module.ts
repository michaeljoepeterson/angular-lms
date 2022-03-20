import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

//@ts-ignore
window.API = {
  LMSInitialize: () => 'true',
  LMSFinish: () => 'true',
  LMSGetValue:(element:any) => '',
  LMSSetValue:(element:any, value:any) => '',
  LMSCommit:(str:any) => '',
  LMSGetLastError:() => '',
  LMSGetErrorString:(errorCode:any) => '',
  LMSGetDiagnostic:(errocCode:any) => ''
};

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
