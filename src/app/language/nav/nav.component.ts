import { Component, OnInit } from '@angular/core';
import {TweenLite} from 'gsap'; 
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public categorys;

  categoryCoverAcivated = false;
  categoryEditorialAcivated = false;

  constructor(private router: Router, private route: ActivatedRoute, private categoriesService: CategoriesService) { }

  ngOnInit(){
      this.categoriesService.categoryActivated.subscribe(
          (user: string) => {
            if(user === 'cover') {
                this.categoryCoverAcivated = true;
            } else if (user === 'editorial'){
              this.categoryEditorialAcivated = true;
            }
          }
        );
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
    let currentUrl = this.router.url; /// this will give you current url

    var res = currentUrl.split("/");
        res = res.slice(0, 3);
    var resUrl = res.join("/");


    this.categorys = ["cover", "editorial"];
    
    if(this.categorys.find((element)=>{ return element === category}) === undefined ) {
      this.router.navigate( [ "/.404"], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    }
    else {
        this.router.navigate( [resUrl, category], {relativeTo: this.route, queryParamsHandling: 'preserve'});  // {relativeTo: this.route} nu cred ca este necesar aici si queryParamsHandling: 'preserve'
   // this.router.navigate( [resUrl, category], {queryParams: {allowEdit: '1'}, fragment: 'loader'}); //this is an exemple that has queryParams and fragmanet
    }


  
    }


}
