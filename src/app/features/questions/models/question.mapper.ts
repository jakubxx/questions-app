import { Question, QuestionType } from '../models/question.model';
import { QuestionDto, QuestionTypeDto } from '../dtos/question.dto';

export function fromDto(dto: QuestionDto): Question {
  return {
    id: dto.id,
    title: dto.title,
    type:
      dto.type === QuestionTypeDto.Text
        ? QuestionType.Text
        : QuestionType.YesNo,
    answer: dto.answer,
  };
}

export function toDto(model: Question): QuestionDto {
  return {
    id: model.id,
    title: model.title,
    type:
      model.type === QuestionType.Text
        ? QuestionTypeDto.Text
        : QuestionTypeDto.YesNo,
    answer: model.answer,
  };
}
