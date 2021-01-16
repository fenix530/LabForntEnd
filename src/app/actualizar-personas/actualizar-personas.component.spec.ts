import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPersonasComponent } from './actualizar-personas.component';

describe('ActualizarPersonasComponent', () => {
  let component: ActualizarPersonasComponent;
  let fixture: ComponentFixture<ActualizarPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
