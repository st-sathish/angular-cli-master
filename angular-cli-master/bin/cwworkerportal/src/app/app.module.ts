import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth/auth.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponentComponent } from './toolbar-component/toolbar-component.component';
import { CafeFunctionsComponent } from './cafe-functions/cafe-functions.component';
import { LegacySystemsComponent } from './legacy-systems/legacy-systems.component';
import { OtherLinksComponent } from './other-links/other-links.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponentComponent,
    CafeFunctionsComponent,
    LegacySystemsComponent,
    OtherLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
