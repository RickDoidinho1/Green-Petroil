import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubRodape } from './sub-rodape';

describe('SubRodape', () => {
  let component: SubRodape;
  let fixture: ComponentFixture<SubRodape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubRodape],
    }).compileComponents();

    fixture = TestBed.createComponent(SubRodape);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
