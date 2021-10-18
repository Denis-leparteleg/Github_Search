import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Repo } from '../repo';
import { User } from '../user';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  Users!: User;
  Repos: Repo[] = [];
  userHttpService: any;
  constructor() {}

  ngOnInit() {
    this.searchGit('Denis-leparteleg');
  }
  searchGit(searchTerm: string) {
    this.userHttpService.searchGits(searchTerm).then(
      () => {
        this.Users = this.userHttpService.Users;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.userHttpService.searchRepos(searchTerm).then(() => {
      this.Repos = this.userHttpService.Repos;
    });
  }

}
