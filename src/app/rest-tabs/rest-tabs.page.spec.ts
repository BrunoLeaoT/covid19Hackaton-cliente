import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestTabsPage } from './rest-tabs.page';

describe('RestTabsPage', () => {
  let component: RestTabsPage;
  let fixture: ComponentFixture<RestTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
