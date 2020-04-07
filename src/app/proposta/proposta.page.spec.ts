import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropostaPage } from './proposta.page';

describe('PropostaPage', () => {
  let component: PropostaPage;
  let fixture: ComponentFixture<PropostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
