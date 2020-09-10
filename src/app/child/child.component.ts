import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
@Output() send = new EventEmitter<{first:string,second :string}>();
a = ""
b = ""
  constructor() { }

  
  func(){
    this.send.emit({first : this.a, second : this.b});

  }

}