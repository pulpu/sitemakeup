import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';
import { NavComponent } from './language/nav/nav.component';
import { ParagraphComponent } from './language/nav/paragraph/paragraph.component';
import { ThemeOneComponent } from './language/nav/theme-one/theme-one.component';
import { ThemeTwoComponent } from './language/nav/theme-two/theme-two.component';
import { ThemeThreeComponent } from './language/nav/theme-three/theme-three.component';
import { ThemeVideoComponent } from './language/nav/theme-video/theme-video.component';
import { PageNotFoundComponent } from './language/page-not-found/page-not-found.component';
import { HomeComponent } from './language/home/home.component';
import { ErrorPageComponent } from './language/error-page/error-page.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: ':language', component: HomeComponent },
    { path: ':language/:category', component: ThemeTwoComponent }, 
  ]}, 

    {path: '', redirectTo: '/home/ro', pathMatch: 'full'},
    // {path: '404', component: PageNotFoundComponent},
    {path: '404', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    {path: '**', redirectTo: '404'}
];


@NgModule({
imports: [
	RouterModule.forRoot( appRoutes )
], 
exports: [ RouterModule]
})

export class AppRouterModule {

}