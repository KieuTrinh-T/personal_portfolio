import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfmCustomerComponent } from './rfm-customer/rfm-customer.component';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from '../project/project.component';
import { HomecreditComponent } from './homecredit/homecredit.component';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes = [
  { path: '', component: ProjectComponent },
  {path: 'rfm-customer', component: RfmCustomerComponent},
  {path: 'homecredit', component: HomecreditComponent}
];

@NgModule({
  declarations: [
    RfmCustomerComponent,
    HomecreditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule
  ]
})
export class ProjectsModule { }
