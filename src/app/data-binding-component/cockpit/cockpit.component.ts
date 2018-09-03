import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('serverCreated') serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output('blueprintCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();

  @ViewChild('serverNameInput') serverNameInput: ElementRef ;
  @ViewChild('serverContentInput') serverContentInput: ElementRef ;

  
  constructor() { }

  ngOnInit() {
  }

  onAddServer() { 
    this.serverCreated.emit({
      serverName: this.serverNameInput.nativeElement.value === '' ? '-/-' : this.serverNameInput.nativeElement.value ,
      serverContent: this.serverContentInput.nativeElement.value === '' ? '-/-' : this.serverContentInput.nativeElement.value 
    })
  }

  onAddBluePrint(){ 
    this.blueprintCreated.emit({
      serverName: this.serverNameInput.nativeElement.value === '' ? '-/-' : this.serverNameInput.nativeElement.value,
      serverContent: this.serverContentInput.nativeElement.value === '' ? '-/-' : this.serverContentInput.nativeElement.value 
    })
  }

}
