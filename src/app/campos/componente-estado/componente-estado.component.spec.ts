import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEstadoComponent } from './componente-estado.component';

describe('ComponenteEstadoComponent', () => {
  let component: ComponenteEstadoComponent;
  let fixture: ComponentFixture<ComponenteEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
