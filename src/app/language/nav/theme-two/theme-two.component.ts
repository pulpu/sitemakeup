import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-theme-two',
  templateUrl: './theme-two.component.html',
  styleUrls: ['./theme-two.component.css']
})
export class ThemeTwoComponent implements OnInit  {
  user: string;
  server: any[];

  constructor(private route: ActivatedRoute, private serverService : ServerService, private router: Router) {
      
      router.events.subscribe((val) => {
     // ----------------- for grid -------------
        this.serverService.getServer()
          .subscribe(
              (server: any[]) => this.server = server[this.user]['items'],
              (error) => console.log(error)
            );
        //-------------- end for grid  ------------
        })

   }



  ngOnInit() {
    this.user = this.route.snapshot.params['category']
    
    this.route.params.subscribe(
        (params: Params) => {
          this.user = params['category'];
          console.log(params['category'])
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
