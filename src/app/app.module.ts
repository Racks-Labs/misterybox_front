import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from './services/api.service';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './components/info/info.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { DetailComponent } from './components/detail/detail.component';
import { UsersComponent } from './pages/users/users.component';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {HttpClientModule} from '@angular/common/http';
import {UtilsService} from './services/utils.service';
import {AuthGuard} from './auth/guards/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';
import {AuthmbService} from './auth/authmb.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    DetailComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    LoadingBarHttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    ApiService,
    UtilsService,
    AuthGuard,
    LoginComponent,
    AuthmbService
  ],
  entryComponents: [InfoComponent, DetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
