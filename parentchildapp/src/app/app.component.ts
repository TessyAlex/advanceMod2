import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildapp';
  enterName="Tessy";
  parentData="";// parentData is like a transport variable
  transferData(){
    this.parentData= this.enterName;
  }
  title1 ='parentchildapp';
  enterTheName="Alice";
  name="";
  dataTransfer(){
    this.name=this.enterTheName;
  }

  value="";
  sendData(value: string){
    this.value=value;
  }

}
