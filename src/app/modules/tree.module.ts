import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../components/main/main.component';
import { LoginComponent } from '../components/login/login.component';

const tree: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  component: MainComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(tree, { useHash: true })],
  exports: [RouterModule]
})
export class TreeModule { }

