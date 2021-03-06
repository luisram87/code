import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionDuringPage } from './action-during.page';

describe('ActionDuringPage', () => {
  let component: ActionDuringPage;
  let fixture: ComponentFixture<ActionDuringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDuringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDuringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
