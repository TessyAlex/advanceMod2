import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()
  parentData1!: string;
  @Input()
  parentData2!: string;
  @Input()
  parentData3!: string;
  @Input()
  parentData4!: string;

  // -------------------------
  @Output() public object= new EventEmitter<string>();
  submit(){
    this.object.emit("successfully submitted");
  }
}
