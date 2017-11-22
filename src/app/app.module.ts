import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Title } from '@angular/platform-browser';
import { CategoriesService } from './categories.service';// ----------------- categoriesService -------------

import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';
import { NavComponent } from './language/nav/nav.component';
import { ParagraphComponent } from './language/nav/paragraph/paragraph.component';
import { AdminComponent } from './language/nav/admin/admin.component';
import { ThemeTwoComponent } from './language/nav/theme-two/theme-two.component';
import { IntroComponent } from './language/nav/intro/intro.component';
import { ThemeVideoComponent } from './language/nav/theme-video/theme-video.component';
import { PageNotFoundComponent } from './language/page-not-found/page-not-found.component';
import { HomeComponent } from './language/home/home.component';
import { AppRouterModule } from './app-routing.module';
import { ErrorPageComponent } from './language/error-page/error-page.component';
import { ServerService } from './server.service';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LanguageComponent,
    ParagraphComponent,
    AdminComponent,
    ThemeTwoComponent,
    IntroComponent,
    ThemeVideoComponent,
    PageNotFoundComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [Title, CategoriesService, ServerService], // ----------------- categoriesService -------------
  bootstrap: [AppComponent]
})
export class AppModule {
    public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
 }

 export class AppRoutingModule{}
 export const routingComponents = [NavComponent, ThemeTwoComponent]
