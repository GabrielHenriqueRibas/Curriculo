import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLogarComponent } from './botao-logar.component';

describe('BotaoLogarComponent', () => {
  let component: BotaoLogarComponent;
  let fixture: ComponentFixture<BotaoLogarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoLogarComponent]
    });
    fixture = TestBed.createComponent(BotaoLogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
