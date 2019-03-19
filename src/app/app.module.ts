import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared components
import { HeaderComponent } from './shared/header/header.component';

// Page components
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
