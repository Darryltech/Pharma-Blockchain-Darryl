import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from  '@angular/material/toolbar';
import {MatSidenavModule} from  '@angular/material/sidenav';
import {MatIconModule} from  '@angular/material/icon';
import {MatListModule} from  '@angular/material/list';
import {MatButtonModule} from  '@angular/material/button';
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatSelectModule} from  '@angular/material/select';
import {MatTabsModule} from  '@angular/material/tabs';
import {MatTableModule} from  '@angular/material/table';
import {MatDialogModule} from  '@angular/material/dialog';
import {MatInputModule} from  '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './component/pharma-sidenav/sidenav.component';
import { HeaderComponent } from './component/pharma-header/header.component';
import { PharmaRegComponent } from './component/pharma-reg/pharma-reg.component';
import { PharmaDashboardComponent } from './component/pharma-dashboard/pharma-dashboard.component';
import { PharmaStockManagementComponent } from './component/pharma-stock-management/pharma-stock-management.component';
import { PharmaSalesManagementComponent } from './component/pharma-sales-management/pharma-sales-management.component';
import { PharmaHelpComponent } from './component/pharma-help/pharma-help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './component/pharma-search-bar/search-bar.component';
import { ProfileComponent } from './component/pharma-profile/profile.component';
import { PharmaNotificationComponent } from './component/pharma-notification/pharma-notification.component';
import { CarteComponent } from './component/pharma-carte/carte.component';
import { TittleComponent } from './component/pharma-tittle/tittle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceiptComponent } from './component/pharma-receipt/receipt.component';
import { OrdersComponent } from './component/pharma-orders/orders.component';
import { CommandComponent } from './component/pharma-command/command.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    PharmaRegComponent,
    PharmaDashboardComponent,
    PharmaStockManagementComponent,
    PharmaSalesManagementComponent,
    PharmaHelpComponent,
    SearchBarComponent,
    ProfileComponent,
    PharmaNotificationComponent,
    CarteComponent,
    TittleComponent,
    ReceiptComponent,
    OrdersComponent,
    CommandComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
