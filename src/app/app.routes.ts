import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './core/login/login.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },

    {
        path: 'courses',
        loadChildren: './course-list/course-list.module#CourseListModule',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always'
    },

    { path: 'login', component: LoginComponent, pathMatch: 'full' },

    { path: '**', component: NotFoundComponent, pathMatch: 'full' },
    { path: 'notFound', component: NotFoundComponent, pathMatch: 'full' },
];
