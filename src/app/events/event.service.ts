import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: { [key: string]: Subject<any>; } = {};

  constructor() { }

  publish(eventName: string, data: any): void {
    if(!this.events[eventName]) {
      console.log("should perhaps not be happening. Event Name: " + eventName);
      this.events[eventName] = new Subject<any>();
    }
    this.events[eventName].next(data);
  }

  subscribe(eventName: string, observer: (_: any) => void): Subscription {
    if(!this.events[eventName]) {
      this.events[eventName] = new Subject<any>();
    }
    return this.events[eventName].subscribe(observer);
  }
}
