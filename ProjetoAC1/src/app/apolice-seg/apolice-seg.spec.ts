import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceSeg } from './apolice-seg';

describe('ApoliceSeg', () => {
  let component: ApoliceSeg;
  let fixture: ComponentFixture<ApoliceSeg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApoliceSeg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoliceSeg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
