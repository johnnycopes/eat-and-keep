import { TestBed, inject } from '@angular/core/testing';

import { PlaceService } from './place.service';

describe('PlacesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PlaceService]
		});
	});

	it('should be created', inject([PlaceService], (service: PlaceService) => {
		expect(service).toBeTruthy();
	}));
});
