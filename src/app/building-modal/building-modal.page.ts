import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    var length = this.building['DESCRIPTION'].length;
    if(length/31+this.building["FULL_NAME"].length > 4) { //31 is width in characters shown
      this.description = this.building['DESCRIPTION'].slice(0,4*31-this.building["FULL_NAME"].length);
    } else {
      this.description = this.building['DESCRIPTION'];
    }
    // this.description += "...";
  }

  dismiss(redirect: boolean) {
    if(redirect) {
      this.router.navigate(['/folder/' + this.building['BUILDING_ID']]);
    }
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
