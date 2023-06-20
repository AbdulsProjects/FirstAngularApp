import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ConnectFourComponent } from './connect-four/connect-four.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'placeholder', component: PlaceholderComponent},
  {path: 'connectFour', component: ConnectFourComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
