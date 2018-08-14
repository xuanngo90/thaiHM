import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { HeaderComponent } from './shared/header.component';

import { RouterModule, Routes } from '@angular/router';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

const appRoutes: Routes = [
  { path: 'customer',      component: CustomersComponent },
  { path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
