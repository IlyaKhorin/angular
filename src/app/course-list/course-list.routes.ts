import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { CourseListItemEditComponent } from './course-list-item-edit/course-list-item-edit.component';

const routes: Routes = [
    {
        path: 'courses',
        component: CourseListComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'courses/new',
        component: CourseListItemEditComponent,
        data: { 'mode': 'new' },
        pathMatch: 'full',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'courses/:id',
        component: CourseListItemEditComponent,
        data: { 'mode': 'edit' },
        pathMatch: 'full',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always'
    },
];

export const routing = RouterModule.forChild(routes);
