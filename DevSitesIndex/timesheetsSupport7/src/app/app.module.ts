import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component'; 

console.log('app.module.ts - 20191002-2007');


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [

    // 10/02/2019 05:47 pm - SSN - [20191002-1118] - [012] - Adding Angular 7 test app
    // Did this solve problem with "ERROR Error: The selector "app-root" did not match any elements"  - Removed app-root from _layout.cshtml
    // putting back in
    BrowserModule,
   


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
