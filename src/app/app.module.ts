import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child.component';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProvideParentForm } from './provide-parent-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProvideParentForm
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
