import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavBarComponent } from './../core/component/nav-bar/nav-bar.component';


@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports:[
        RouterModule
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {}