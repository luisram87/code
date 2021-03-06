import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProtocolosPage } from './protocolos.page';

describe('ProtocolosPage', () => {
  let component: ProtocolosPage;
  let fixture: ComponentFixture<ProtocolosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProtocolosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
