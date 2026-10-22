import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoItem } from './cartao-item';

describe('CartaoItem', () => {
  let component: CartaoItem;
  let fixture: ComponentFixture<CartaoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
