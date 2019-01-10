import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './pages/home-page/home-page.module#HomePageModule'
    },
    {
        path: 'detail/:id',
        loadChildren: './detail-page/detail-page.module#DetailPageModule'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: ''
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class HomeRoutingModule { }