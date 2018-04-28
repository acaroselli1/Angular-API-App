import { Component } from '@angular/core';
  
  //had to import the two below
  import {Http, Response} from '@angular/http';
  import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //added everything to the curly brace
  private apiUrl ="https://api.nasa.gov/planetary/apod?api_key=poeURtqV4lHNZtDSKw2wiUPaKZekb5T9MrV3CFpI";
  data: any = {};
  constructor(private http:Http){
  this.getSpace();
  this.getSpaceData();
  }

  //added everything to the bottom
  getSpace(){
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json())
  }
  
  getSpaceData(){
    this.getSpace().subscribe(data =>{
      console.log(data);
      this.data = data
    })
  }

  openImage(){
     document.getElementById("space").style.display = "block";
  }

}
