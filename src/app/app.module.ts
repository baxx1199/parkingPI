import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './templates/nav-bar/nav-bar.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { InfoDriverComponent } from './views/info-driver/info-driver.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingPageComponent } from './views/setting-page/setting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    InfoDriverComponent,
    ProfileComponent,
    SettingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
