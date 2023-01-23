import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Features/Login/Login.component';
import { RegisterComponent } from './features/register/register.component';
import { ProfileComponent } from './Features/Profile/Profile.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { authenticationService } from './Core/Authentication.service';
import { NavbarComponent } from './Core/Navbar/Navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
   
  ],
  providers: [authenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
