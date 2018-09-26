import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildinputComponent } from './components/childinput/childinput.component';
import { ChildlistComponent } from './components/childlist/childlist.component';
import { LocalService } from 'src/app/services/local.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildinputComponent,
    ChildlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
