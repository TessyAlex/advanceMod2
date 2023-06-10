import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
@Output() public sendData= new EventEmitter<string>();

// ngOnInit(){//directly it comes on the page without clicking the button
//   this.sendData.emit('This is Child data');
// }
datacomes(){
  this.sendData.emit('This is Child data');
}
}
