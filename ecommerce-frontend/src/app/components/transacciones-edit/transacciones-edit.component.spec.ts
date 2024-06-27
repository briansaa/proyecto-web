import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesEditComponent } from './transacciones-edit.component';

describe('TransaccionesEditComponent', () => {
  let component: TransaccionesEditComponent;
  let fixture: ComponentFixture<TransaccionesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransaccionesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaccionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
