import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { CountComponent } from './count/count.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductComponent,
    ListComponent,
    CountComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
