import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { InfoDriverComponent } from './views/info-driver/info-driver.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'infoDriver',component:InfoDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
