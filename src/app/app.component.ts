import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { PlaceService } from './places/place.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Eat & Keep';

	constructor(
    private authService: AuthService,
    private placeService: PlaceService
  ) { }

	ngOnInit() {
	}

	// getPlaces(): void {
	// 	this.placeService.getPlaces()
	// 		.subscribe(places => this.places = places);
  // }

  onLogout(): void {
    this.authService.logout()
      .subscribe(response => console.log(response));
  }
}
