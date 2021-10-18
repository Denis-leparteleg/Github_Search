import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Repo } from 'src/app/repo';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  Users!: User;
  Repos: Repo[] = [];
  userHttpService: any;
  constructor() {}

  ngOnInit() {
    this.searchGit('Denis-leparteleg');
  }
  searchGit(searchTerm: string) {
    this.userHttpService.searchGits(searchTerm).then(
      (_success: any) => {
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