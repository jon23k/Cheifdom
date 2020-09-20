import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnterComponent} from './enter/enter.component'
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  { path: 'enter', component: EnterComponent},
  { path: 'info', component: InfoComponent},
  { path: '**', component: EnterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
