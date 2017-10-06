import { Component, OnInit } from '@angular/core';
import {TweenLite} from 'gsap'; 
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ServerService } from '../../server.service';
import { Response } from '@angular/http';

import { CategoriesService } from '../../categories.service'; // ----------------- categoriesService -------------


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public categorys;
  public categoryid;
  public menu;

  categoryCoverAcivated = false;
  categoryEditorialAcivated = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private categoriesService: CategoriesService, 
    private serverService : ServerService) { }

    


  ngOnInit(){
    // ----------------- categoriesService ---------------
      this.categoriesService.categoryActivated.subscribe(
          (category: string) => {
            if(category === 'cover') {
                this.categoryCoverAcivated = true;
                this.categoryEditorialAcivated = false;
            } else if (category === 'editorial'){
              this.categoryEditorialAcivated = true;
              this.categoryCoverAcivated = false;
            }
          }
        );
      //-------------- end categoriesService ------------


      // ----------------- categoriesService -------------
       let currentUrl = this.router.url; /// this will give you current url
       let res = currentUrl.split("/");
           res = res.slice(3);
       let resUrl = res.join("/");
       this.categoriesService.categoryActivated.next(resUrl);
       this.categoryid = resUrl;
       //-------------- end categoriesService ------------


      // ----------------- for menu -------------
      this.serverService.getServer()
        .subscribe(
            (server: any[]) => this.menu = server['menu'],
            (error) => console.log(error)
          );
       //-------------- end for menu  ------------
  }


	buttonHamburger() { // this is the hambuger button for mobile (hiding and showing the menu)
 		let nav = document.getElementById('nav');
 		let left = window.getComputedStyle(nav).left
		let screenWith = document.documentElement.clientWidth;

		if (left === "0px") {
            TweenLite.to(nav, 1, { left: -screenWith });
        } else {
            TweenLite.to(nav, 1, { left: 0 });
        }
	}

  onClick(category) {
    category = category.toLowerCase()
    // ----------------- categoriesService -------------
    this.categoriesService.categoryActivated.next(category);  // this pise of code change the class
    //-------------- end categoriesService ------------

      let currentUrl = this.router.url; /// this will give you current url

      var res = currentUrl.split("/");
          res = res.slice(0, 3);
      var resUrl = res.join("/");

      this.categorys = ["cover", "editorial", "video", "bridal", "print", "backstage", "makingoff", "caracters", "contact"];
    
      if(this.categorys.find((element)=>{ return element === category}) === undefined ) {
        this.router.navigate( [ "/.404"], {relativeTo: this.route, queryParamsHandling: 'preserve'});
      }
      else {
          this.router.navigate( [resUrl, category], {relativeTo: this.route, queryParamsHandling: 'preserve'});  // {relativeTo: this.route} nu cred ca este necesar aici si queryParamsHandling: 'preserve'
     // this.router.navigate( [resUrl, category], {queryParams: {allowEdit: '1'}, fragment: 'loader'}); //this is an exemple that has queryParams and fragmanet
          this.categoryid = category;
      }
    }


}
