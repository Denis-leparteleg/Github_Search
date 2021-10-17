import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './github-search-form/navbar/navbar.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';
import { GithubUsernameComponent } from './github-username/github-username.component';
import { GithubRepositoriesComponent } from './github-repositories/github-repositories.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubSearchFormComponent,
    GithubUsernameComponent,
    GithubRepositoriesComponent,
    UserNotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
