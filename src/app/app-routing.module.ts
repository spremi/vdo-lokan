import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './routes/about/about.component';
import { E404Component } from './routes/e404/e404.component';
import { HomeComponent } from './routes/home/home.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { UserComponent } from './routes/user/user.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: E404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
