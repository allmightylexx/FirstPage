import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component'; // CLI imports router

const routes: Routes = [
  { path: '',   redirectTo: 'page-one', pathMatch: 'full' },
  { path: 'page-one', component: PageOneComponent},
  { path: 'page-two', component: PageTwoComponent}


]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }