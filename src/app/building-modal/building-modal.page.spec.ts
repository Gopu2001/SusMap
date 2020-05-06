import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuildingModalPage } from './building-modal.page';

describe('BuildingModalPage', () => {
  let component: BuildingModalPage;
  let fixture: ComponentFixture<BuildingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
