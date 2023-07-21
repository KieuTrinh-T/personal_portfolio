import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfmCustomerComponent } from './rfm-customer/rfm-customer.component';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from '../project/project.component';

const routes = [
  { path: '', component: ProjectComponent },
  {path: 'rfm-customer', component: RfmCustomerComponent}
];

@NgModule({
  declarations: [
    RfmCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
