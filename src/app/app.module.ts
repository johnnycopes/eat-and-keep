import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Services
import { AuthService } from './auth/auth.service';
import { PlaceService } from './places/place.service';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
	],
	providers: [
    AuthService,
    PlaceService
  ],
	bootstrap: [AppComponent]
})
export class AppModule { }
