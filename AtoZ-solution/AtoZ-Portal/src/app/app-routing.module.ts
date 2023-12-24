import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import {SignInComponent} from './component/signIn.component';
import {HomeComponent} from './component/home.component';
import {PageNotFoundComponent} from './component/utilComponent/pageNotFound.component';
import { AssociateComponent } from './component/associate.component';
import {ProjectComponent} from './component/project.component';

const routes: Routes = [
{ path: '', redirectTo:'SignIn', pathMatch:'full'},
{ path: 'SignIn', component: SignInComponent},
{ path: 'App', component:AppComponent},
{ path: 'Home', component: HomeComponent},
{ path: 'Associate', component: AssociateComponent},
{ path: 'Project', component: ProjectComponent},
{ path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
