import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule, HAMMER_LOADER } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";
import {
  MatIconModule,
  MatGridListModule,
  MatSliderModule,
  MatProgressBarModule,
  MatDialogModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectGridComponent } from "./components/project-grid/project-grid.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { SkillListComponent } from "./components/skill-list/skill-list.component";
import { ModalComponent } from './components/modal/modal.component';
import { WellsFargoComponent } from './components/wells-fargo/wells-fargo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    ProjectGridComponent,
    TestimonialsComponent,
    SkillListComponent,
    ModalComponent,
    WellsFargoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatSliderModule,
    MatProgressBarModule
  ],
  entryComponents: [
    WellsFargoComponent
  ],
  providers: [
    {
      provide: HAMMER_LOADER,
      useValue: () => new Promise(() => {})
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
