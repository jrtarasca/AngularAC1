import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversTemp } from './convers-temp';

describe('ConversTemp', () => {
  let component: ConversTemp;
  let fixture: ComponentFixture<ConversTemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversTemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversTemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
