import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewsDayComponent } from './components/news-day/news-day.component';
import { NewsComponent } from './components/news/news.component';
import { TematicsComponent } from './components/tematics/tematics.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundNewsComponent } from './components/background-news/background-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NewsDayComponent,
    NewsComponent,
    TematicsComponent,
    FooterComponent,
    BackgroundNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
