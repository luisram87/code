import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PronosticoPage } from './pronostico.page';

describe('PronosticoPage', () => {
  let component: PronosticoPage;
  let fixture: ComponentFixture<PronosticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronosticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PronosticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
