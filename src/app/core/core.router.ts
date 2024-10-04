import {Routes} from "@angular/router";

const CORE_ROUTES: Routes = [

  {
    path: 'panel',
    loadComponent: () => import('./layout/layout/layout.component'),
    children: [
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'rooms',
        loadComponent: () => import('./pages/rooms/rooms.component').then(m => m.RoomsComponent)
      },
      {
        path: 'members',
        loadComponent: () => import('./pages/members/members.component').then(m => m.MembersComponent)
      },
      {
        path: 'information-table',
        loadComponent: () => import('./pages/information-table/information-table.component').then(m => m.InformationTableComponent)
      },
      {
        path: 'todos', //todo: Puede ser un id para cada sala
        loadComponent: () => import('./pages/todos/todos.component').then(m => m.TodosComponent)
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
