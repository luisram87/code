import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionPrePage } from './action-pre.page';

describe('ActionPrePage', () => {
  let component: ActionPrePage;
  let fixture: ComponentFixture<ActionPrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionPrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
