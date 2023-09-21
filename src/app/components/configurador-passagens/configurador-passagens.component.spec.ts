import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguradorPassagensComponent } from './configurador-passagens.component';

describe('ConfiguradorPassagensComponent', () => {
  let component: ConfiguradorPassagensComponent;
  let fixture: ComponentFixture<ConfiguradorPassagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguradorPassagensComponent]
    });
    fixture = TestBed.createComponent(ConfiguradorPassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
