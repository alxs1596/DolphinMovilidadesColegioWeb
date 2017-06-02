import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilidadesComponent } from './movilidades.component';

describe('MovilidadesComponent', () => {
  let component: MovilidadesComponent;
  let fixture: ComponentFixture<MovilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
