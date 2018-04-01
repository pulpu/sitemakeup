import { Component, OnInit } from '@angular/core';



import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


	public constructor(private titleService: Title ) { }

	 public setTitle() {
    this.titleService.setTitle( "gigi fute" );
  }

  ngOnInit(){}
  
}
