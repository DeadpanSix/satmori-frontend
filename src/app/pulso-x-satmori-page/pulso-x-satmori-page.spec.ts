import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsoXSatmoriPage } from './pulso-x-satmori-page';

describe('PulsoXSatmoriPage', () => {
  let component: PulsoXSatmoriPage;
  let fixture: ComponentFixture<PulsoXSatmoriPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulsoXSatmoriPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulsoXSatmoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
