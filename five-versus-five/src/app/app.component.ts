import { Component, OnInit } from '@angular/core';
import { HorizonService } from './services/horizon.service';

@Component({
  selector: 'fvf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  questions: any[];

  constructor(private horizonService: HorizonService) {}

  ngOnInit() {
    this.questions = this.horizonService.table('questions').watch();
  }
}
