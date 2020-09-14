import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnterComponent} from './enter/enter.component';
import {InfoPageComponent} from './info-page/info-page.component';

const routes: Routes = [
  { path: 'enter', component: EnterComponent},
  { path: 'info', component: InfoPageComponent},
  { path: '**', component: InfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
