import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { EventService } from './../events/event.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private menu: MenuController,
    private events: EventService
  ) { }

  ngOnInit() {
    this.menu.enable(true,'outsideMap');
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.events.publish('clear', []);
    this.events.publish('page', Number(this.folder));
    this.id = Number(this.folder);
  }

}
