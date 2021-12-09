import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AppQuestionnaireService {

  constructor(public httpClient: HttpClient) { }

  public retrieveQuestionnaire(): Observable<any> {
    return this.httpClient.get('yithian86/api/questionnaire');
  }
}
