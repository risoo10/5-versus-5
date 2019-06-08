import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizonService } from './services/horizon.service';
import { IntroComponent } from './pages/intro/intro.component';
import { QuestionComponent } from './pages/question/question.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, IntroComponent, QuestionComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatIconModule],
  providers: [HorizonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
