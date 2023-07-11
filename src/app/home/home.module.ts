import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, HomeViewComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [HomeViewComponent],
})
export class HomeModule {}
