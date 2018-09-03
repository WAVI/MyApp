import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-component',
  templateUrl: './data-binding-component.component.html',
  styleUrls: ['./data-binding-component.component.css']
})
export class DataBindingComponentComponent implements OnInit {

  serverElements = [
    {
      type: 'server',
      name: 'First one',
      content: 'just a test'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

  
  onServerAdded(serverData: {
    serverName: string,
    serverContent: string
  }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent

    })
  }

  onDeleteFirst() {
     this.serverElements.splice(0,1);
  }

  onBlueprintAdded(serverData: {
    serverName: string,
    serverContent: string
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

}
