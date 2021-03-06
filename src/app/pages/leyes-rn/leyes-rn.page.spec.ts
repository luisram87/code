import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeyesRNPage } from './leyes-rn.page';

describe('LeyesRNPage', () => {
  let component: LeyesRNPage;
  let fixture: ComponentFixture<LeyesRNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeyesRNPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeyesRNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
