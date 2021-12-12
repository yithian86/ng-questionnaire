import { FormGroup, ValidatorFn } from "@angular/forms";
import { FIELD_TYPE } from "./app-questionnaire.constants";

export namespace AppQuestionnaireTypings {

  export interface IField {
    config: IQuestion,
    group: FormGroup,
    currency?: string
  }

  export interface IOption {
    optionId: string;
    optionText: string;
    optionIcon?: string;
  }

  export interface IQuestionnaire {
    id: string,
    steps: Array<IStep>
  }

  export interface IStep {
    id: string,
    questions: Array<IQuestion>
  }

  export interface IQuestion {
    id: string,
    type: FIELD_TYPE,
    answer: number,
    text: string,
    description: string,
    options: Array<IOption>;
  }

  export interface IOption {
    optionId: string,
    optionText: string
  }
}
