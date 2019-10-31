import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { VmlHeaderComponent } from './components/vml-header/vml-header.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductionComponent } from './components/pages/production/production.component';
import { AttachmentsComponent } from './components/pages/attachments/attachments.component';
import { SparePartsComponent } from './components/pages/spare-parts/spare-parts.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { SpecialMachineryComponent } from './components/pages/special-machinery/special-machinery.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PerspectiveComponent } from './components/pages/perspective/perspective.component';

@NgModule({
  declarations: [
    AppComponent,
    VmlHeaderComponent,
    MainComponent,
    ProductionComponent,
    AttachmentsComponent,
    SparePartsComponent,
    ContactsComponent,
    SpecialMachineryComponent,
    NotFoundComponent,
    PerspectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
