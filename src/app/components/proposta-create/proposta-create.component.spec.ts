import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaCreateComponent } from './proposta-create.component';

describe('PropostaCreateComponent', () => {
  let component: PropostaCreateComponent;
  let fixture: ComponentFixture<PropostaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropostaCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropostaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
