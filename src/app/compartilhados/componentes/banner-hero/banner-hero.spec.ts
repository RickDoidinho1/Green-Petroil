import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerHero } from './banner-hero';

describe('BannerHero', () => {
  let component: BannerHero;
  let fixture: ComponentFixture<BannerHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerHero],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
