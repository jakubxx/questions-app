export enum QuestionType {
  Text = 'TEXT',
  YesNo = 'YES-NO',
}

export interface Question {
  id: string;
  title: string;
  type: QuestionType;
  answer?: string | boolean;
}
