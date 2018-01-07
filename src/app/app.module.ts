import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IconService } from './modules/material/icon.service';
import { MaterialModule } from './modules/material/material.module';
import { AboutComponent } from './routes/about/about.component';
import { E404Component } from './routes/e404/e404.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { UserComponent } from './routes/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SettingsComponent,
    UserComponent,
    E404Component,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class
 AppModule {
  constructor (private iconSvc: IconService) {
    iconSvc.register();
  }
}
