import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';

const routes: Routes = [
  {path: '', redirectTo: 'nfl', pathMatch: 'full'},
  {path: 'nfl', component: NewsComponent, data: {feedType: 'nfl-news',source:'nfl'}},
  {path: 'espn', component: NewsComponent, data: {feedType: 'espn',source:'espn'}},
  {path: 'fox', component: NewsComponent, data: {feedType: 'fox-sports',source:'Fox Sports'}},
  {path: 'bbc', component: NewsComponent, data: {feedType: 'bbc-sport',source:'BBC Sports'}},
  {path:'**', redirectTo: 'nfl', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
