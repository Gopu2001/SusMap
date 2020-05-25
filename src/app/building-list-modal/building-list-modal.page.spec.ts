import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuildingListModalPage } from './building-list-modal.page';

describe('BuildingListModalPage', () => {
  let component: BuildingListModalPage;
  let fixture: ComponentFixture<BuildingListModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingListModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
