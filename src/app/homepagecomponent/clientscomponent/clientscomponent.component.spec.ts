import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientscomponentComponent } from './clientscomponent.component';

describe('ClientscomponentComponent', () => {
  let component: ClientscomponentComponent;
  let fixture: ComponentFixture<ClientscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
