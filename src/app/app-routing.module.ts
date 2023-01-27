
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Features/login/login.component';
import { ProfileComponent } from './Features/profile/profile.component';
import { RegisterComponent } from './Features/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'sign-in',pathMatch: 'full' },
  {path: 'sign-in', component: LoginComponent},
  {path: 'sign-up', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: 'sign-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
