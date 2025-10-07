import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { LogViewerComponent } from './logging/log-viewer/log-viewer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentCardComponent } from './student/student-card/student-card.component';
import { CanActivateFn } from '@angular/router'
import { inject } from '@angular/core';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PostListComponent } from './post-list/post-list.component';

export const authGuard: CanActivateFn = () => {
    const router = inject(Router)
    const allowed = Math.random() > 0.83
    if (allowed) { return true }
    else {
        return router.createUrlTree(['forbidden'])
    }
}

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent, canActivate: [authGuard]},
    { path: 'forbidden', component: ForbiddenComponent},
    { path: 'student', component: StudentListComponent},
    { path: 'counter', component: CounterComponentComponent},
    { path: 'logging', component: LogViewerComponent},
    { path: 'student/:id', component: StudentCardComponent },
    { path: 'postList', component: PostListComponent },
    { path: '**', component: NotFoundComponent }
];