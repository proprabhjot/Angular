import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  serverElements = [
    { type: 'server', name: 'testserver', content: 'just a test' },
    { type: 'blueprint', name: 'server', content: 'just a test' }
  ];

  oddNumbers: Number[] = [];
  evenNumbers: Number[] = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onintervalFired(firedNumber) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

  constructor() { }

  // ngOnChanges() {}  // called after inbound changes.

  ngOnInit() {}  // called once component is intialized.

  // ngDoCheck(){} // called every change detected.

  // ngAfterContentInit() {} // called after content (ng-content) has been projected in view

  // ngAfterContentChecked() {} // called every time the projected content has been checked

  // ngAfterViewInit() {} // called after the componenet view (and child views) has been initialized

  // ngAfterViewChecked() {} called every time (and child views) have been checked

  // ngOnDestroy() {} // called when coponenet is about to be destroyed.

}
