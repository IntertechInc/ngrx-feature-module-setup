import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'movies',
        loadChildren: "./movie-list/movie-list.module#MovieListModule"
    },
    {
        path: 'admin',
        loadChildren: "./admin/admin.module#AdminModule"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
