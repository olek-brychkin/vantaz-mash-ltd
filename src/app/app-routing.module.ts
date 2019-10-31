import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/pages/main/main.component';
import { ProductionComponent } from './components/pages/production/production.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import {SpecialMachineryComponent} from './components/pages/special-machinery/special-machinery.component';
import {AttachmentsComponent} from './components/pages/attachments/attachments.component';
import {SparePartsComponent} from './components/pages/spare-parts/spare-parts.component';
import {ContactsComponent} from './components/pages/contacts/contacts.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'special-machinery', component: SpecialMachineryComponent },
  { path: 'attachments', component: AttachmentsComponent },
  { path: 'spare-parts', component: SparePartsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
