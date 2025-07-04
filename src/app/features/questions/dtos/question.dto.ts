export enum QuestionTypeDto {
  Text = 'TEXT',
  YesNo = 'YES-NO',
}

export type QuestionAnswerType = string | boolean | undefined;

export interface QuestionDto {
  id: string;
  title: string;
  type: QuestionTypeDto;
  answer?: string | boolean;
}
