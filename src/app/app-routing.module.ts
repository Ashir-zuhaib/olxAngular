import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SaleformComponent } from './component/saleform/saleform.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { SellerdashboardComponent } from './pages/sellerdashboard/sellerdashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seller', component: SellerdashboardComponent },
  { path: 'sellform', component: SaleformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
