import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { layoutRoutes } from './layout.routes';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';

import { ViewsNavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ViewsNavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(layoutRoutes),
  ]
})
export class LayoutModule {
}
