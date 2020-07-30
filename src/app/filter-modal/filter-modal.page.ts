import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {

  filter = {};

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss(redirect: boolean, markerDataItem) {
    this.modalController.dismiss({
      'dismissed': true,
      'redirect': redirect,
      'markerDataItem': markerDataItem,
    });
  }

}
