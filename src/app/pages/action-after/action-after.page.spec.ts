import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionAfterPage } from './action-after.page';

describe('ActionAfterPage', () => {
  let component: ActionAfterPage;
  let fixture: ComponentFixture<ActionAfterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionAfterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionAfterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
