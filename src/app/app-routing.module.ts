import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WellsFargoComponent } from './components/wells-fargo/wells-fargo.component';
import { AchieveItComponent } from './components/achieve-it/achieve-it.component';
import { DuolingoComponent } from './components/duolingo/duolingo.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: "wellsFargo", component: DuolingoComponent },
  { path: "achieveIt", component: AchieveItComponent },
  // { path: "music", component: MusicComponent },
  // { path: "theater", component: TheaterPageComponent },
  // { path: "dance", component: DancePageComponent },
  // { path: 'workshops-page', component: WorkshopsPageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
