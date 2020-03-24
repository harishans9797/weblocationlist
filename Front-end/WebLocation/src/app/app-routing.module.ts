import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { LocationdetailsComponent} from './locationdetails/locationdetails.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'locationlist', component: LocationlistComponent},
  { path: 'locationdetails/:id', component: LocationdetailsComponent},
  { path: 'addlocation', component: AddlocationComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LocationlistComponent,
  LocationdetailsComponent,
  AddlocationComponent,
  LoginComponent
];
