import {Routes} from "@angular/router";

const CORE_ROUTES: Routes = [

  {
    path: 'panel',
    loadComponent: () => import('./layout/layout/layout.component'),
    children: [
      {
        path: 'todos',
        loadComponent: () => import('./pages/todos/todos.component').then(m => m.TodosComponent)
      },
      {
        path: 'rooms',
        loadComponent: () => import('./pages/rooms/rooms.component').then(m => m.RoomsComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'members',
        loadComponent: () => import('./pages/members/members.component').then(m => m.MembersComponent)
      },
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'panel',
    pathMatch: 'full',
  }
];


export default CORE_ROUTES;
