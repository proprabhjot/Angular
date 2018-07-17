import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{ serverName: String, serverContent: String }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: String, serverContent: String }>();

  constructor() { }

  ngOnInit() {
  }

  onServerAdded(inputValue: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputValue.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onBlueprintAdded(inputValue: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: inputValue.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
