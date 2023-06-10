import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {

  num1: any=0;
  num2: any=0;
  res1:any =0;
  sum(n1:number,n2:number):number{
    this.res1= +n1 + +n2;
    return this.res1;
    
  }
}
