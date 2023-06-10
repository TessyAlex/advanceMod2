import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testcases';
  message = 'Hello from parent!';
  notification = '';

  handleNotify(message: string) {
    this.notification = message;
  }
}

