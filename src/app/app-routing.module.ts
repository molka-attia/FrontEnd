import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './auth/login/login.component';
// import{MainDashAdminComponent} from './admin/main-dash-admin/main-dash-admin.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'technicien', loadChildren: () => import('./technicien/technicien.module').then(m => m.TechnicienModule) },
  // {path:'admin',component:MainDashAdminComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
