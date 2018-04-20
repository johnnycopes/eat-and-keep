import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlaceService {

	constructor(private httpClient: HttpClient) { }

	getPlaces() {
		return this.httpClient.get('/api/test');
	}
}
