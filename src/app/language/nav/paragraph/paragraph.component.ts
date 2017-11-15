import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

import {
 Component,
 OnInit,
 trigger,
 state,
 style,
 transition,
 animate
} from '@angular/core';


@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css'],
  // animations: [
		// trigger('divState', [
		// state('normal', style({
		// 	 '-webkit-transition': 'left 0.8s ease-in',
		// 	     left: '-webkit-calc(-95% + 235px)'
		// 		})),
		// state('highlighted', style({
		// 	'-webkit-transition': 'left 0.8s ease-in'
		// 		})),
		// transition('normal => highlighted', animate(800)),
		// transition('highlighted => normal', animate(800))
		// 	]),		
  // ]
})
export class ParagraphComponent implements OnInit {
	// state = 'normal';
	public animate = false; // this parameter must be send by
	user: string;
  	server: any[];
  	

	onAnimate() {
		// this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
		this.animate == false ? this.animate = true : this.animate = false;
	}

  constructor(private route: ActivatedRoute, private serverService : ServerService, private router: Router) {
  router.events.subscribe((val) => {
     // ----------------- for grid -------------
        this.serverService.getServer()
          .subscribe(
              (server: any[]) => this.server = server[this.user]['paragraph'],
              (error) => console.log(error)
            );
            this.animate = false; // PBI 0006

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

}
