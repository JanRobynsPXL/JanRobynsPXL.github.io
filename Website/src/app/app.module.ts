import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActiviteitenComponent } from './activiteiten/activiteiten.component';
import { CvComponent } from './cv/cv.component';
import { ReflectieComponent } from './reflectie/reflectie.component';
import { ErrorComponent } from './error/error.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InmemorydataService} from './Shared/inmemorydata.service';
import { StarsPipe } from './pipes/stars.pipe';
import { FlagsPipe } from './pipes/flags.pipe';
import { LijstVanActiviteitenComponent } from './lijst-van-activiteiten/lijst-van-activiteiten.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActiviteitenComponent,
    CvComponent,
    ReflectieComponent,
    ErrorComponent,
    StarsPipe,
    FlagsPipe,
    LijstVanActiviteitenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InmemorydataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
