import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetail } from './coin-detail';

describe('CoinDetail', () => {
  let component: CoinDetail;
  let fixture: ComponentFixture<CoinDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
