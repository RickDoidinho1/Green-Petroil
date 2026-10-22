import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaixaInstitucional } from './faixa-institucional';

describe('FaixaInstitucional', () => {
  let component: FaixaInstitucional;
  let fixture: ComponentFixture<FaixaInstitucional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaixaInstitucional],
    }).compileComponents();

    fixture = TestBed.createComponent(FaixaInstitucional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
