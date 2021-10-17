import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.css']
})
export class GithubRepositoriesComponent implements OnInit {
  username: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {

    interface ApiResponse{
     author:string
    }

    this.http.get<ApiResponse>(environment.BASEURL).subscribe(data=>{
      // Successful API request
      this.username = new this.username(data.author)
    }, err=>{
      this.username = new this.username("Denis-leparteleg")
      console.log("An error occurred")
    })
  }

}
