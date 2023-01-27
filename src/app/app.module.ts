import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './Features/register/register.component';
import { ProfileComponent } from './Features/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authenticationService } from './Core/authentication.service';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { LoginComponent } from './Features/login/Login.component';
import { RandomMessagePipe } from './shared/random-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    LoginComponent,
    RandomMessagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [authenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
