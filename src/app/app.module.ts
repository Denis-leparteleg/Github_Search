import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';
import { GithubUsernameComponent } from './github-username/github-username.component';
import { GithubRepositoriesComponent } from './github-repositories/github-repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubSearchFormComponent,
    GithubUsernameComponent,
    GithubRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
