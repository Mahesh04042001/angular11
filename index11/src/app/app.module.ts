import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RtpcrformComponent } from './rtpcrform/rtpcrform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { BookComponent } from './book/book.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookListComponent } from './book-list/book-list.component';
import { BookformComponent } from './bookform/bookform.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TabComponent } from './tab/tab.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    RtpcrformComponent,
    EmployeeformComponent,
    BookComponent,
    PriceDiscountPipe,
    BookListComponent,
    BookformComponent,
    CatalogueComponent,
    TabComponent,
    NewsComponent,
    MenuComponent,
    CustomerformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
