import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoInicialComponent } from './corpo-inicial.component';

describe('CorpoInicialComponent', () => {
  let component: CorpoInicialComponent;
  let fixture: ComponentFixture<CorpoInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpoInicialComponent]
    });
    fixture = TestBed.createComponent(CorpoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
