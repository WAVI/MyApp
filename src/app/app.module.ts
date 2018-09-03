import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { ServerComponentComponent } from './basic-component/server-component/server-component.component';
import { ServersComponentComponent } from './basic-component/servers-component/servers-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponentComponent,
    ServerComponentComponent,
    ServersComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
