import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  // { path: "event", component: EventPageComponent },
  // { path: "visual-arts", component: VisualArtsComponent },
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
