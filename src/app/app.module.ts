//StackOverflow Attribution regarding ERROR in ./~/firebase/app/shared_promise.js
//question author bekamais
//question author stackoverflow profile link https://stackoverflow.com/users/7871788/bekamais
//answer author Zafer
//question author stackoverflow profile https://stackoverflow.com/users/7340228/zafer

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { APP_ROUTES_PROVIDER } from '../app/app.routes';
import { KeysPipe } from './keys.pipe';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TodosComponent,
    HomeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
