import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../../../categories.service';

@Component({
  selector: 'app-theme-two',
  templateUrl: './theme-two.component.html',
  styleUrls: ['./theme-two.component.css']
})
export class ThemeTwoComponent implements OnInit {
  user: string;

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) {
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


// pe pagina asta trebuie cumva sa fac ca sa afiseze categoria selectata dintr-un json