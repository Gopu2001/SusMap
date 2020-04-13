import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { EventService } from './../events/event.service';
import { AppDataService } from './../services/app-data.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public id;
  public building = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private menu: MenuController,
    private events: EventService,
    private info: AppDataService
  ) { }

  ionViewDidEnter() {
    this.menu.enable(true,'outsideMap');
  }

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.events.publish('clear', []);
    this.events.publish('page', Number(this.folder));
    this.id = Number(this.folder);
    await this.info.getSpecificBuildingData(this.id).then((data) => {
      if(data) {
        this.building = data;
      }
    });
  }

}
