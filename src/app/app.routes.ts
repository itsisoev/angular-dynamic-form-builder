import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/form-room-one/form-room-one').then(m => m.FormRoomOne)
  }
];
