import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InundHistoricoPage } from './inund-historico.page';

describe('InundHistoricoPage', () => {
  let component: InundHistoricoPage;
  let fixture: ComponentFixture<InundHistoricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InundHistoricoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InundHistoricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
