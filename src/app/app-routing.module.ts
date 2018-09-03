import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { BasicComponentComponent } from "./basic-component/basic-component.component";
import { AppComponent } from "./app.component";

const routes: Routes =[
    {
        path: '', 
        pathMatch: 'full',
        component: AppComponent
    },
    {
        path: 'basicComponent',
        component: BasicComponentComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}