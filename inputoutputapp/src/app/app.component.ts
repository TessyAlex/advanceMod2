import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutputapp';
  name ="";//came from ngmodel
  age="";
  phoneno="";
  dob="";
  parentData1="";
  parentData2="";
  parentData3="";
  parentData4="";

  viewDetails(){
    this.parentData1=this.name;
    this.parentData2=this.age;
    this.parentData3=this.phoneno;
    this.parentData4=this.dob;
  }

  // ------------------------------------
  value=""
  object(value:string){
    this.value=value;
  }

// -------------------------------------------
  id="";
  pname="";
  description="";

  parentId="";
  parentPname="";
  parentDescription="";

  viewTable(){
    this.parentId=this.id;
    this.parentPname=this.pname;
    this.parentDescription=this.description;
  }
  // ------------------------------------------------
  value1=""
  table(value1:string){
    this.value1=value1;
  }
  // -------------------------------------------

  counter=5;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }


// ----------------------------------------------------

items=['item1','item2'];
addItem(newItem:string){
    this.items.push(newItem);
  }
}
