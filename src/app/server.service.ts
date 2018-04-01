import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
	constructor(private http: Http){}
<<<<<<< HEAD
	storeServer(url: string, server: any[]) {
		const headers = new Headers({'Content-Type':'application/json'})
		return this.http.put(url,server,{headers: headers});
=======
	storeServer(server: any[]) {
		const headers = new Headers({'Content-Type':'application/json'})
		return this.http.post('https://makeupweb-f6410.firebaseio.com/data.json', 
			server,
			{headers: headers});
>>>>>>> b86dbea77f1eb0bf07f41b4dbcf96be07e3ad21a
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