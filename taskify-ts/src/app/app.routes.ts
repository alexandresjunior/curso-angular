import { Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: "", component: TasksComponent },
    { path: "detalhes", component: AboutComponent }
];
