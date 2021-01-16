import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUasuarioComponent } from './crear-uasuario.component';

describe('CrearUasuarioComponent', () => {
  let component: CrearUasuarioComponent;
  let fixture: ComponentFixture<CrearUasuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUasuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUasuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
