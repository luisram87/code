import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VecinosPage } from './vecinos.page';

describe('VecinosPage', () => {
  let component: VecinosPage;
  let fixture: ComponentFixture<VecinosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VecinosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VecinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
