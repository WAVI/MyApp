import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { BasicComponentComponent } from "./basic-component/basic-component.component";
import { AppComponent } from "./app.component";
import { DataBindingComponentComponent } from "./data-binding-component/data-binding-component.component";
import { DirectivesComponentComponent } from "./directives-component/directives-component.component";
import { ServicesExampleComponent } from "./services-example/services-example.component";

const routes: Routes =[
    {
        path: '', 
        pathMatch: 'full',
        component: AppComponent
    },
    {
        path: 'basicComponent',
        component: BasicComponentComponent
    },
    {
        path: 'dataComponent',
        component: DataBindingComponentComponent
    },
    {
        path: 'directiveComponent',
        component: DirectivesComponentComponent
    },
    {
        path: 'servicesExample',
        component: ServicesExampleComponent

    },
    {
        path: '**', redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}