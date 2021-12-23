import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppTypings } from './app.interfaces';


@Injectable({
  providedIn: 'root'
})
export class AppEventsService {
  public flashMessageEmitter: EventEmitter<AppTypings.IFlashMessageData>;

  constructor() {
    this.flashMessageEmitter = new EventEmitter();
  }

  public openFlashMessage(flashMessageData: AppTypings.IFlashMessageData): void {
    this.flashMessageEmitter.emit(flashMessageData);
  }
}
