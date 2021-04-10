import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ActiviteitenComponent} from './activiteiten/activiteiten.component';
import {CvComponent} from './cv/cv.component';
import {ReflectieComponent} from './reflectie/reflectie.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'activiteiten', component: ActiviteitenComponent},
  {path: 'cv', component: CvComponent},
  {path: 'reflectie', component: ReflectieComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
