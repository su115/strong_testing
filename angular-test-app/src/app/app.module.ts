import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component1/header/header.component';
import { MenuComponent } from './component1/menu/menu.component';
import { NewsDayComponent } from './component1/news-day/news-day.component';
import { NewsComponent } from './component1/news/news.component';
import { TematicsComponent } from './component1/tematics/tematics.component';
import { FooterComponent } from './component1/footer/footer.component';
import { MainPageComponent } from './component1/main-page/main-page.component';
import { SkeletonComponent } from './component2/skeleton/skeleton.component';
import { SkeletonAComponent } from './component3/skeleton-a/skeleton-a.component';

import { MomentPipe } from './moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NewsDayComponent,
    NewsComponent,
    TematicsComponent,
    FooterComponent,
    //BackgroundNewsComponent,
    MainPageComponent,
    SkeletonComponent,
    SkeletonAComponent,

    MomentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
