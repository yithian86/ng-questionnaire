import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AppQuestionnaireService {

  constructor(private httpClient: HttpClient) { }

  public retrieveQuestionnaire(): Observable<any> {
    return this.httpClient.get('yithian86/api/questionnaire');
  }

  public submitQuestionnaire(payload: FormData): Observable<any> {
    return this.httpClient.post('yithian86/api/questionnaire', payload);
  }
}
