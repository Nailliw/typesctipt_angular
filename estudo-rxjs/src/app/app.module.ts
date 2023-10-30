import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TesteObservableComponent } from './components/teste-observable/teste-observable.component';
import { RelogioComponent } from './components/relogio/relogio.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteObservableComponent,
    RelogioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
