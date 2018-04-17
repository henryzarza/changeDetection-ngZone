import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DefaultCdComponent } from './default-cd/default-cd.component';
import { OnPushCdComponent } from './on-push-cd/on-push-cd.component';
import { RouterModule, Routes, Router } from '@angular/router';


const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/default-cd',
    pathMatch: 'full'
  },
  {
    path: 'default-cd',
    component: DefaultCdComponent
  },
  {
    path: 'onpush-cd',
    component: OnPushCdComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DefaultCdComponent,
    OnPushCdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
