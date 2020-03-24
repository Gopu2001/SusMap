import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EventService } from './../events/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public filters = [
    {
      title: 'Economical',
      active: false
    },
    {
      title: 'Environmental',
      active: false
    }
  ];

  constructor(
    private menu: MenuController,
    private events: EventService
  ) { }

  ngOnInit() {
    this.menu.enable(true,'insideMap');
    for (let i = 0; i < this.filters.length; i++) {
      this.events.subscribe(this.filters[i].title, (data: any) => {
        //update active status
        this.filters[i].active = !data.active;
      });
    }
  }

  printData() {
    for (let i = 0; i < this.filters.length; i++) {
      console.log("title: " + this.filters[i].title + ", active: " + this.filters[i].active);
    }
  }

}
