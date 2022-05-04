import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RewindComponent } from './rewind/rewind.component';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestPipe } from './test.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RewindComponent,
    ParentComponent,
    ChildComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
