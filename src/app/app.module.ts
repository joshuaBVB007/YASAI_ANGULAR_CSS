import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalsComponent } from './animals/animals.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MostradorComponent } from './mostrador/mostrador.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { CounterComponent } from './counter/counter.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { SearchDataPipe } from './search-data.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AnimalsComponent,
    LocationComponent,
    ContactComponent,
    NavBarComponent,
    PaginationComponent,
    ToolBarComponent,
    ProductDetailComponent,
    MostradorComponent,
    MiListaComponent,
    CounterComponent,
    InfoProductComponent,
    SearchDataPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
