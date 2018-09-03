import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { ServerComponentComponent } from './basic-component/server-component/server-component.component';
import { ServersComponentComponent } from './basic-component/servers-component/servers-component.component';
import { DataBindingComponentComponent } from './data-binding-component/data-binding-component.component';
import { CockpitComponent } from './data-binding-component/cockpit/cockpit.component';
import { ServerElementComponent } from './data-binding-component/server-element/server-element.component';
import { DirectivesComponentComponent } from './directives-component/directives-component.component';
import { BasicHighlightDirective } from './directives-component/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives-component/better-highlight/better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponentComponent,
    ServerComponentComponent,
    ServersComponentComponent,
    DataBindingComponentComponent,
    CockpitComponent,
    ServerElementComponent,
    DirectivesComponentComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
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
