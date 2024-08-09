import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { UserpageComponent } from './userpage/userpage.component';

export const routes: Routes = [
  { path: '', component:PageComponent},
  { path: 'user', component:UserpageComponent},
];
