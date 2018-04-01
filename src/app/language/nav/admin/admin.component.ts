import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {



path: string;
server: any[];
servers = [
	{
		photographer:  'default'
	}
];

 public uploader:FileUploader = new FileUploader({url: URL});

  constructor(private route: ActivatedRoute, private serverService : ServerService, private router: Router ) {

  	      router.events.subscribe((val) => {
     // ----------------- for grid -------------
        this.serverService.getServer()
          .subscribe(
              (server: any[]) => this.server = server[this.path]['items'],
              (error) => console.log(error)

            );
        //-------------- end for grid  ------------

        })

   }

  onAddServer(photographer: string,) {
    this.servers.push({
      photographer: photographer
    });
  }



ngOnInit() {
 this.path = this.route.snapshot.params['id']
	    console.log(this.route.snapshot.params);

	    this.route.params.subscribe(
	        (params: Params) => {
	          this.path = params['id'];
	          console.log(params['id'])
	        }
	      )    
  }


onSave(id){
  this.serverService.storeServer('https://makeupweb-f6410.firebaseio.com/data/'+ this.path + '/' + 'items' +'.json' , this.servers)
      .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
  }



}
