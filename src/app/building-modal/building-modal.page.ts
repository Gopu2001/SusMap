import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-building-modal',
  templateUrl: './building-modal.page.html',
  styleUrls: ['./building-modal.page.scss'],
})
export class BuildingModalPage implements OnInit {

  building = {};
  description: string;
  leedInfo: boolean;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    var length = this.building['DESCRIPTION'].length;
    if(length/31 > 4) { //31 is width in characters shown
      this.description = this.building['DESCRIPTION'].slice(0,4*31);
    } else {
      this.description = this.building['DESCRIPTION'];
    }
    this.description += "...";
  }

  dismiss() {
    const data = "name: " + this.building['FULL_NAME'];
    this.modalController.dismiss({
      'dismissed': true,
      'data': data
    });
  }

}
