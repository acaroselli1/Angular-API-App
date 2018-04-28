import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

  
  //had to bring these in 
  import { FormsModule} from '@angular/forms';
  import { HttpModule} from '@angular/http';
  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
      //had to bring these in
      FormsModule,
      HttpModule

  ],
    //had to include AppComponent as a provider
    providers: [AppComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
