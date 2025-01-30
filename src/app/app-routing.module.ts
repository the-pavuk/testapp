import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DelayGuard } from './delay.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'public_page', component: PublicPageComponent },
  { path: 'private_page', component: PrivatePageComponent, canActivate: [AuthGuard] },
  {
    path: 'very_fat_page',
    loadChildren: () => import('./very-fat-page/very-fat-page.module').then(m => m.VeryFatPageModule),
    canActivate: [AuthGuard],
    canLoad: [DelayGuard],
    data: { delay: 2000 }
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
