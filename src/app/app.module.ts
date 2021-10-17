import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';
import { GithubUsernameComponent } from './github-username/github-username.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubSearchFormComponent,
    GithubUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
