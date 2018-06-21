import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'testserver', content: 'just a test' },
  { type: 'blueprint', name: 'server', content: 'just a test' }];

  oddNumbers: Number[] = [];
  evenNumbers: Number[] = [];

  onintervalFired(firedNumber) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
  }
}


}
