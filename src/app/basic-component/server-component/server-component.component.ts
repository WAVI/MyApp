import { Component } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styles: []
})
export class ServerComponentComponent{

  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus(){ 
    return this.serverStatus
  }

  getColor() { 
   return  this.serverStatus === 'online' ? 'green' : 'red'
  }
}
