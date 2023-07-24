import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './about-me/about-me.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { ProjectComponent } from './project/project.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {MatIconModule} from '@angular/material/icon';
import { PersonalityComponent } from './personality/personality.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skill/skill.component';


const routes = [
  { path: '', component: HomepageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutMeComponent,
    ProjectComponent,
    HomepageComponent,
    PersonalityComponent,
    FooterComponent,
    SkillComponent,

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
