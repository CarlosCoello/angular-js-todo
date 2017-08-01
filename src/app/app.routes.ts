import { ContactComponent } from './contact/contact.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

export const APP_ROUTES_PROVIDER = [ RouterModule.forRoot(APP_ROUTES)];
