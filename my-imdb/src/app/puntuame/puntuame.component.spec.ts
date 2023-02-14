import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuameComponent } from './puntuame.component';

describe('PuntuameComponent', () => {
  let component: PuntuameComponent;
  let fixture: ComponentFixture<PuntuameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntuameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntuameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
