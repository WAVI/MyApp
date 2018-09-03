import { Component } from '@angular/core';

@Component({
  selector: 'app-servers-component',
  templateUrl: './servers-component.component.html'
})
export class ServersComponentComponent {

  serverName = ''
  allowNewServer = false;
  
  servers = [
    "testservers",
    "productionServers"
  ]
  
  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000)
   }

  onCreateServer() {
    this.servers.push(this.serverName);
  }

}
