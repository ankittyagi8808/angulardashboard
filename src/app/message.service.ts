import { Injectable, NgModule } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}