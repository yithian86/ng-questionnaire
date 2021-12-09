import { Component } from '@angular/core';

@Component({
  template: '',
  styleUrls: []
})
export abstract class AppWidgetComponent {
  public widgetState: WIDGET_STATE;

  constructor() { }

  ngOnInit() {
    this.widgetState = WIDGET_STATE.INIT_STATE;
  }

  public isWidgetInitState = (): boolean => this.widgetState === WIDGET_STATE.INIT_STATE;

  public isWidgetWaitingState = (): boolean => this.widgetState === WIDGET_STATE.WAITING_STATE;

  public isWidgetReadyState = (): boolean => this.widgetState === WIDGET_STATE.READY_STATE;

  public isWidgetErrorState = (): boolean => this.widgetState === WIDGET_STATE.ERROR_STATE;

  public setWidgetInitState = (): void => {
    this.widgetState = WIDGET_STATE.INIT_STATE;
  }

  public setWidgetWaitingState = (): void => {
    this.widgetState = WIDGET_STATE.WAITING_STATE;
  }

  public setWidgetReadyState = (): void => {
    this.widgetState = WIDGET_STATE.READY_STATE;
  }

  public setWidgetErrorState = (): void => {
    this.widgetState = WIDGET_STATE.ERROR_STATE;
  }
}

export enum WIDGET_STATE {
  INIT_STATE = 'INIT_STATE',
  WAITING_STATE = 'WAITING_STATE',
  READY_STATE = 'READY_STATE',
  ERROR_STATE = 'ERROR_STATE'
}
