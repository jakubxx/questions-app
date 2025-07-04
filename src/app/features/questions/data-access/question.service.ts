import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionDto } from '../dtos/question.dto';
import { fromDto, toDto } from '../models/question.mapper';
import { STORAGE_KEYS } from '../../../core/constants/storage-keys';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  load(): Question[] {
    const raw = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
    const dtos: QuestionDto[] = raw ? JSON.parse(raw) : [];
    return dtos.map(fromDto);
  }

  save(questions: Question[]) {
    const dtos = questions.map(toDto);
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(dtos));
  }
}
