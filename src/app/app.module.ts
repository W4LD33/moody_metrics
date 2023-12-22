import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { AddDiaryItemFormComponent } from './add-diary-item-form/add-diary-item-form.component';
import { DiaryListFilterComponent } from './diary-list-filter/diary-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryListComponent,
    AddDiaryItemFormComponent,
    DiaryListFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
