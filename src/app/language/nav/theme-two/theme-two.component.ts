import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-theme-two',
  templateUrl: './theme-two.component.html',
  styleUrls: ['./theme-two.component.css']
})
export class ThemeTwoComponent implements OnInit {
  user: string;
  server: any[];
  public cars;
  public grid;

//   server = { 
//     "cover" : {
//       "items" : [ {
//         "agentia" : "Icon",
//         "campania" : "7Up Setea",
//         "conpania" : "Coca-Cola",
//         "id" : 1,
//         "img" : "https://i.pinimg.com/736x/2e/48/f1/2e48f1fabc1a72a15dc4ba16f4a9403a--fashion-magazine-covers-fashion-magazines.jpg",
//         "photographer" : "Cosmin Gogu"
//       }, {
//         "agentia" : "Icon 2",
//         "campania" : "7Up Setea 2",
//         "conpania" : "Coca-Cola 2",
//         "id" : 2,
//         "img" : "https://i.pinimg.com/736x/2e/48/f1/2e48f1fabc1a72a15dc4ba16f4a9403a--fashion-magazine-covers-fashion-magazines.jpg",
//         "photographer" : "Cosmin Gogu 2"
//       }, {
//         "agentia" : "Icon 3",
//         "campania" : "7Up Setea 3",
//         "conpania" : "Coca-Cola 3",
//         "id" : 3,
//         "img" : "https://i.pinimg.com/736x/2e/48/f1/2e48f1fabc1a72a15dc4ba16f4a9403a--fashion-magazine-covers-fashion-magazines.jpg",
//         "photographer" : "Cosmin Gogu 3"
//       } ],
//       "paragraph" : "A paragraph (from the Ancient Greek παράγραφος paragraphos, \"to write beside\" or \"written beside\") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.[1][2] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose."
//     }
// };


  constructor(private route: ActivatedRoute, private serverService : ServerService) {
   }



  ngOnInit() {
    this.user = this.route.snapshot.params['category']
    
    this.route.params.subscribe(
        (params: Params) => {
          this.user = params['category'];
          console.log(params['category'])
        }
      )

    this.serverService.getServer()
      .subscribe(
          (server: any[]) => this.server = server,
          (error) => console.log(error)
        );

      this.cars = [
        {"title" : "Saab"},
        {"title" : "cover",
         "subMenu" : ["fifi", "gigi"]
        },
        {"title" : "BMW"}
      ];


      // // ----------------- for grid -------------
      // this.serverService.getServer()
      //   .subscribe(
      //       (server: any[]) => this.grid = server[this.user],
      //       (error) => console.log(error)
      //     );
      //  //-------------- end for grid  ------------


  }

  onSave(){
    this.serverService.storeServer(this.server)
      .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
  }
}


// pe pagina asta trebuie cumva sa fac ca sa afiseze categoria selectata dintr-un json