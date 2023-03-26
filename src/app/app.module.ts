import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import { CompagnesListComponent } from '@app/modules/compagnes-list/compagnes-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaignFormularComponent } from '@app/modules/compaign-formular/compaign-formular.component';
import { RouterModule  } from '@angular/router';
import { AppRoutingModule } from '@app/app-rooting.module';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    CompagnesListComponent,
    CompaignFormularComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,SharedModule,
    ReactiveFormsModule,RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class AppModule { }
