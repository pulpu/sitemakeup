import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

<<<<<<< HEAD
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

=======
declare var jquery:any;
declare var $ :any;
>>>>>>> b86dbea77f1eb0bf07f41b4dbcf96be07e3ad21a


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
<<<<<<< HEAD
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {



=======
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
>>>>>>> b86dbea77f1eb0bf07f41b4dbcf96be07e3ad21a
path: string;
server: any[];
servers = [
	{
<<<<<<< HEAD
		photographer:  'default'
	}
];

 public uploader:FileUploader = new FileUploader({url: URL});
=======
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




>>>>>>> b86dbea77f1eb0bf07f41b4dbcf96be07e3ad21a

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

<<<<<<< HEAD
  onAddServer(photographer: string,) {
    this.servers.push({
      photographer: photographer
    });
  }


=======
>>>>>>> b86dbea77f1eb0bf07f41b4dbcf96be07e3ad21a

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


<<<<<<< HEAD
onSave(id){
  this.serverService.storeServer('https://makeupweb-f6410.firebaseio.com/data/'+ this.path + '/' + 'items' +'.json' , this.servers)
=======
    onSave(){
    this.serverService.storeServer(this.server)
>>>>>>> b86dbea77f1eb0bf07f41b4dbcf96be07e3ad21a
      .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
  }

<<<<<<< HEAD


=======
>>>>>>> b86dbea77f1eb0bf07f41b4dbcf96be07e3ad21a
}
