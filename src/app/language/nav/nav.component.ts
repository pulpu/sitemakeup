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
  public categoryid;

  categoryCoverAcivated = false;
  categoryEditorialAcivated = false;

  constructor(private router: Router, private route: ActivatedRoute, private categoriesService: CategoriesService) { }

  ngOnInit(){
      this.categoriesService.categoryActivated.subscribe(
          (user: string) => {
            if(user === 'cover') {
                this.categoryCoverAcivated = true;
                this.categoryEditorialAcivated = false;
            } else if (user === 'editorial'){
              this.categoryEditorialAcivated = true;
              this.categoryCoverAcivated = false;
            }
          }
        );

       let currentUrl = this.router.url; /// this will give you current url
       let res = currentUrl.split("/");
           res = res.slice(3);
       let resUrl = res.join("/");
       this.categoriesService.categoryActivated.next(resUrl);
       this.categoryid = resUrl;
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
    this.categoriesService.categoryActivated.next(category);  // this pise of code change the class

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
