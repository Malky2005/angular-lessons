import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SdudentDetailsComponent } from './sdudent-details/sdudent-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    SdudentDetailsComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
