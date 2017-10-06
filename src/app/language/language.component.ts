import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
data; 
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSelect(language) {
  	let currentUrl = this.router.url; /// this will give you current url
              console.log("currentUrl: " + currentUrl)

  	let res = currentUrl.split("/");
  		  res[2] = language;
              console.log("res: " + res)

  	let newurl = res.join('').toString()
              console.log("newurl: " + newurl)

  	this.router.navigate( [ newurl]);
  };


}


// de vazut in cazul in care cineva scrie in path home/jdskjf ar trebui sa dea 404 !!!!!!!!!!! de facut 