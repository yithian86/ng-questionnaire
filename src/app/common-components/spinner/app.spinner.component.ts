import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './app.spinner.pug',
  styleUrls: ['./app.spinner.scss']
})
export class AppSpinnerComponent {

  @Input() fullScreenMode: boolean;

  constructor() {}

  ngOnInit() {}
}
