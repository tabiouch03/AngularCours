import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingMessageComponent } from './reading-message.component';

describe('ReadingMessageComponent', () => {
  let component: ReadingMessageComponent;
  let fixture: ComponentFixture<ReadingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
