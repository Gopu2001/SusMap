import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

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
    private router: Router,
    public platform: Platform
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.description = this.building['DESCRIPTION'].replace("---", "\n");
    // console.log(this.building);
    // var length = this.description.length;
    // var lines = 4;
    // //around 35 charcters per line for mobile
    // if(this.building['SHORTENED_NAME'] == this.building['FULL_NAME']) {
    //   lines += 3;
    // }
    // console.log(this.platform.width());
    // console.log(lines*20*(this.platform.width()*80/100)/35);
    // this.description = this.description.slice(0, lines*20*(this.platform.width()*80/100)/35);

    // if(length/31+(this.building["FULL_NAME"].length/20) > 6) { //31 is width in characters shown
    //   this.description = this.description.slice(0,4*31-(this.building["FULL_NAME"].length/20));
    // }
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
