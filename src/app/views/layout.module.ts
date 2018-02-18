import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { layoutRoutes } from './layout.routes';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';

import { ViewsNavbarComponent } from './navbar/navbar.component';
import { ViewsDashboardComponent } from './dashboard/dashboard.component';
import { ViewsDashboardCoinSummaryComponent } from './dashboard/coin-summary/coin-summary.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ViewsNavbarComponent,
    ViewsDashboardComponent,
    ViewsDashboardCoinSummaryComponent
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
