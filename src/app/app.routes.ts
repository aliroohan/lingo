import { Routes } from '@angular/router';
import { LingoComponent } from './lingo/lingo.component';
import { TutorComponent } from './tutor/tutor.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'find-lingo',
        pathMatch: 'full'
    },
    {
        path: 'find-lingo',
        component: LingoComponent
    },
    {
        path: 'tutor',
        component: TutorComponent
    }
];
