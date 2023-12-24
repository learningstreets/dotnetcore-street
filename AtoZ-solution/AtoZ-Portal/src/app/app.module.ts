import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Application Components
import { AppComponent } from './app.component';
import {SignInComponent} from './component/signIn.component';
import {HomeComponent} from './component/home.component';
import { AssociateComponent } from './component/associate.component';
import {PageNotFoundComponent} from './component/utilComponent/pageNotFound.component';
import {SpinnerComponent} from './component/utilComponent/spinner.component';
import {ProjectComponent} from './component/project.component';
import { GridComponent } from './component/utilComponent/grid.component';

// Interceptor
import {SpinnerInterceptor} from './interceptors/spinner.interceptors';

// Application Services
import { UtilService } from './service/utilService';

// Third Party Modules
import {SidebarModule} from 'primeng/sidebar'
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table'

// Internal Modules
import {DynamicFormModule} from './dynamicForm.module';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    PageNotFoundComponent, 
    AssociateComponent , GridComponent, ProjectComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, DynamicFormModule,
    SidebarModule,InputTextModule, HttpClientModule, TableModule
  ],
  providers: [
    UtilService,
  { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
