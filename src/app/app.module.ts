import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { AppRoutingModule } from  './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { SuitesListComponent } from './suites-list/suites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectCreateComponent,
    SuitesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
