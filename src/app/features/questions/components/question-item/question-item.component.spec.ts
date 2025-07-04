import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { QuestionItemComponent } from './question-item.component';

describe('QuestionItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionItemComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the QuestionItemComponent', () => {
    const fixture = TestBed.createComponent(QuestionItemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
