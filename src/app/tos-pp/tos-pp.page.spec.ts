import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TosPpPage } from './tos-pp.page';

describe('TosPpPage', () => {
  let component: TosPpPage;
  let fixture: ComponentFixture<TosPpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TosPpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TosPpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
