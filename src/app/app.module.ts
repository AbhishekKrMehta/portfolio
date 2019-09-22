import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './body/home-page/home-page.component';
import { AboutMeComponent } from './body/about-me/about-me.component';
import { MySkillsComponent } from './body/my-skills/my-skills.component';
import { MyWorksComponent } from './body/my-works/my-works.component';
import { MyExperienceComponent } from './body/my-experience/my-experience.component';
import { ContactMeComponent } from './body/contact-me/contact-me.component';
import { BodyComponent } from './body/body.component';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SocialProfilesComponent } from './body/social-profiles/social-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyWorksComponent,
    MyExperienceComponent,
    ContactMeComponent,
    BodyComponent,
    SocialProfilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
