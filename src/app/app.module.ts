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
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HeaderComponent } from './component/header/header.component';
import { PharmaRegComponent } from './component/pharma-reg/pharma-reg.component';
import { PharmaStatComponent } from './component/pharma-stat/pharma-stat.component';
import { PharmaDashboardComponent } from './component/pharma-dashboard/pharma-dashboard.component';
import { PharmaStockManagementComponent } from './component/pharma-stock-management/pharma-stock-management.component';
import { PharmaSalesManagementComponent } from './component/pharma-sales-management/pharma-sales-management.component';
import { PharmaHelpComponent } from './component/pharma-help/pharma-help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PharmaNotificationComponent } from './component/pharma-notification/pharma-notification.component';
import { CarteComponent } from './component/carte/carte.component';
import { TittleComponent } from './component/tittle/tittle.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    PharmaHelpComponent,
    SearchBarComponent,
    ProfileComponent,
    PharmaNotificationComponent,
    CarteComponent,
    TittleComponent
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
