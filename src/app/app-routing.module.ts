import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './component/carte/carte.component';
import { PharmaDashboardComponent } from './component/pharma-dashboard/pharma-dashboard.component';
import { PharmaHelpComponent } from './component/pharma-help/pharma-help.component';
import { PharmaNotificationComponent } from './component/pharma-notification/pharma-notification.component';
import { PharmaSalesManagementComponent } from './component/pharma-sales-management/pharma-sales-management.component';
import { PharmaStatComponent } from './component/pharma-stat/pharma-stat.component';
import { PharmaStockManagementComponent } from './component/pharma-stock-management/pharma-stock-management.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard' ,component:PharmaDashboardComponent},
  {path:'help' ,component: PharmaHelpComponent},
  {path:'sales' ,component:PharmaSalesManagementComponent},
  {path:'stock' ,component:PharmaStockManagementComponent},
  {path:'stat' ,component:PharmaStatComponent},
  {path:'carte' ,component:CarteComponent},
  {path:'profile' ,component:ProfileComponent},
  {path:'notifications' ,component:PharmaNotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
