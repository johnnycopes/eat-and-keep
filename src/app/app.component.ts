import { Component, OnInit } from '@angular/core';
import { PlaceService } from './places/place.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [ PlaceService ]
})
export class AppComponent implements OnInit {
	title = 'Eat & Keep';
	places: any;

	constructor(private placeService: PlaceService) { }

	ngOnInit() {
		console.log('hey');
		this.getPlaces();
	}

	getPlaces(): void {
		this.placeService.getPlaces()
			.subscribe(places => this.places = places);
	}
}
