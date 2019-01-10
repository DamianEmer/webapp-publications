import { NgModule } from '@angular/core';
import { DetailPageComponent } from './detail-page.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path:'',
    component: DetailPageComponent
}]

const COMMON_DECLARATIONS = [
    DetailPageComponent
]

const COMMON_IMPORTS = [
    CommonModule,
    RouterModule.forChild(routes)
]

@NgModule({
    declarations: [COMMON_DECLARATIONS],
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class DetailPageModule {

}