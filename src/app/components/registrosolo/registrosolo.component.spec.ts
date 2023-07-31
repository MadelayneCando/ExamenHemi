import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosoloComponent } from './registrosolo.component';

describe('RegistrosoloComponent', () => {
  let component: RegistrosoloComponent;
  let fixture: ComponentFixture<RegistrosoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosoloComponent]
    });
    fixture = TestBed.createComponent(RegistrosoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
