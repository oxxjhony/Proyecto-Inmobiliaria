import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarInmuebleComponent } from './eliminar-inmueble.component';

describe('EliminarInmuebleComponent', () => {
  let component: EliminarInmuebleComponent;
  let fixture: ComponentFixture<EliminarInmuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarInmuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
