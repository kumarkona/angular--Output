import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  x ="";
  y="";

  hi(data:{first:string, second:string}){
this.x=data.first;
this.y=data.second;
  }
}
