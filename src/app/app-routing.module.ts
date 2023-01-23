
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Features/Login/Login.component';
import { ProfileComponent } from './Features/Profile/Profile.component';
import { RegisterComponent } from './features/register/register.component';

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
