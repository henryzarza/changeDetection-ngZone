import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DefaultCdComponent } from './default-cd/default-cd.component';
import { OnPushCdComponent } from './on-push-cd/on-push-cd.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { Cmp1Component } from './default-cd/cmp-1/cmp-1.component';
import { Cmp2Component } from './default-cd/cmp-2/cmp-2.component';
import { Cmp3Component } from './default-cd/cmp-3/cmp-3.component';
import { Cmp4Component } from './default-cd/cmp-4/cmp-4.component';
import { Cmp5Component } from './default-cd/cmp-5/cmp-5.component';
import { Cmp6Component } from './default-cd/cmp-6/cmp-6.component';
import { Cmp7Component } from './default-cd/cmp-7/cmp-7.component';
import { Cmp8Component } from './default-cd/cmp-8/cmp-8.component';
import { Cmp9Component } from './default-cd/cmp-9/cmp-9.component';
import { Cmp10Component } from './default-cd/cmp-10/cmp-10.component';
import { Cmp11Component } from './default-cd/cmp-11/cmp-11.component';
import { Cmp12Component } from './default-cd/cmp-12/cmp-12.component';


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
    OnPushCdComponent,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component,
    Cmp4Component,
    Cmp5Component,
    Cmp6Component,
    Cmp7Component,
    Cmp8Component,
    Cmp9Component,
    Cmp10Component,
    Cmp11Component,
    Cmp12Component
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
