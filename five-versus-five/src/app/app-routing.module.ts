import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { QuestionComponent } from './pages/question/question.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
