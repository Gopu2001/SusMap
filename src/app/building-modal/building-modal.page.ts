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
  description:string;

  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.description = this.building['DESCRIPTION'].split("---")[0];
    var length = this.description.length;
    if(length/31+(this.building["FULL_NAME"].length/20) > 6) { //31 is width in characters shown
      this.description = this.description.slice(0,4*31-(this.building["FULL_NAME"].length/20));
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
