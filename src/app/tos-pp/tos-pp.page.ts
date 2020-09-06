import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tos-pp',
  templateUrl: './tos-pp.page.html',
  styleUrls: ['./tos-pp.page.scss'],
})
export class TosPpPage implements OnInit {

  public agreeButton: boolean;
  @ViewChild('tosSlider', {static: true}) slides: IonSlides;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    // allowTouchMove: false
  };

  constructor(
    private modalController: ModalController,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.slides.lockSwipeToNext(this.agreeButton);
      this.slides.lockSwipes(this.agreeButton);
    });
  }

  ngOnInit() {

  }

  nextSlide() {
    this.slides.lockSwipeToNext(false).then(() => {
      this.slides.lockSwipes(false).then(() => {
        this.slides.slideNext();
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
