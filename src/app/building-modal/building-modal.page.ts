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
  }

  dismiss() {
    const data = "name: " + this.building['FULL_NAME'];
    this.modalController.dismiss({
      'dismissed': true,
      'data': data
    });
  }

}
