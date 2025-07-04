import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { QuestionListPage } from './question-list.page';

describe('QuestionListPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionListPage],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the QuestionListPage', () => {
    const fixture = TestBed.createComponent(QuestionListPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
