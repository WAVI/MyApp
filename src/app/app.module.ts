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
import { ServicesExampleComponent } from './services-example/services-example.component';
import { AccountComponent } from './services-example/account/account.component';
import { NewAccountComponent } from './services-example/new-account/new-account.component';
import { AccountService } from './services-example/accounts.service';


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
    BetterHighlightDirective,
    ServicesExampleComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
