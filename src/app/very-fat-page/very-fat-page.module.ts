import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { VeryFatPageComponent } from './very-fat-page.component';

const routes: Routes = [
  { path: '', component: VeryFatPageComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ToastrModule.forRoot()
  ]
})
export class VeryFatPageModule { }
