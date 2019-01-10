import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
    path: '',
    component: HomePageComponent
}]

const COMMON_DECLARATION = [
    HomePageComponent
]

const COMMON_IMPORTS = [
    CommonModule,
    MatTableModule
]

@NgModule({
    declarations: COMMON_DECLARATION,
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    exports: COMMON_DECLARATION
})

export class HomePageModule {

}