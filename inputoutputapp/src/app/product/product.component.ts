import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input()
parentId!:string;
@Input()
parentPname!:string;
@Input()
parentDescription!:string;

// ----------------------------

@Output() public table= new EventEmitter<string>();
  success(){
    this.table.emit("created table successfully");
  }
}
