import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingPageComponent } from './app-landingpage/app.landingpage.component';
import { AppQuestionnaireComponent } from './app-questionnaire/app-questionnaire.component';


const APP_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'landingpage',
        pathMatch: 'full'
      },
      {
        path: 'landingpage',
        component: AppLandingPageComponent
      },
      {
        path: 'questionnaire',
        component: AppQuestionnaireComponent
      }
    ]
  }
  // {
  //   path: AppConstants.SECTION_ROUTE_PATHS.SERVICE_DOWN,
  //   component: ServiceDownComponent
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  //   canActivate: [AuthGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
