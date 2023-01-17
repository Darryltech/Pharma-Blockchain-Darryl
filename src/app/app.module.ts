import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { PharmaRegComponent } from './pharma-reg/pharma-reg.component';
import { PharmaStatComponent } from './pharma-stat/pharma-stat.component';
import { PharmaDashboardComponent } from './pharma-dashboard/pharma-dashboard.component';
import { PharmaStockManagementComponent } from './pharma-stock-management/pharma-stock-management.component';
import { PharmaSalesManagementComponent } from './pharma-sales-management/pharma-sales-management.component';
import { PharmaHelpComponent } from './pharma-help/pharma-help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    PharmaRegComponent,
    PharmaStatComponent,
    PharmaDashboardComponent,
    PharmaStockManagementComponent,
    PharmaSalesManagementComponent,
    PharmaHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
