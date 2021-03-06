import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactosInteresPage } from './contactos-interes.page';

describe('ContactosInteresPage', () => {
  let component: ContactosInteresPage;
  let fixture: ComponentFixture<ContactosInteresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactosInteresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactosInteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
