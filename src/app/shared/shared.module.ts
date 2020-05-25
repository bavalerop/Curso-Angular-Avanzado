import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Error404Component } from '../error/error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [
      Error404Component,
      HeaderComponent,
      SidebarComponent,
      BreadcrumbsComponent,
    ],
    imports: [
      BrowserModule,
    ],
    exports: [
      Error404Component,
      HeaderComponent,
      SidebarComponent,
      BreadcrumbsComponent,
    ]
  })
  export class SharedModule { }




















