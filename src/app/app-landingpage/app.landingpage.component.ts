import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.landingpage.pug',
  styleUrls: ['./app.landingpage.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppLandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  public goToQuestionnaire() {
    this.router.navigate(['/', 'questionnaire']);
  }
}
