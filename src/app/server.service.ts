import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
	constructor(private http: Http){}
	storeServer(url: string, server: any[]) {
		const headers = new Headers({'Content-Type':'application/json'})
		return this.http.put(url,server,{headers: headers});
	}
	getServer() {
		return this.http.get('https://makeupweb-f6410.firebaseio.com/data.json')
		.map(
			(response: Response) => {
				const data = response.json();
				return data;
			}
		);
	}
}