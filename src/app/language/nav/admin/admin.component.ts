import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
path: string;
server: any[];
servers = [
	{
		agentia: 'default',
		company: 'default',
		id: 0,
		img:  'default',
		kind:  'default',
		orientation:  'default',
		photographer:  'default',
		director:  'default',
		smallimg:  'default',
		paragraph:  'default',
	}
];
  onAddServer(agentia: string, company: string, id: number, img: string, king: string, orientation: string, photographer: string, director: string, smallimg: string, pharagraph: string) {
    this.servers.push({
      agentia: agentia,
      company: company,
      id: id,
      img: img,
      kind: king,
      orientation: orientation,
      photographer: photographer,
      director: director,
      smallimg: smallimg,
      paragraph: pharagraph
    });
  }





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


    onSave(){
    this.serverService.storeServer(this.server)
      .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
  }

}
