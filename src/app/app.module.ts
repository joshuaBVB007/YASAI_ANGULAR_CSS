import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductosComponent } from './productos/productos.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CounterComponent } from './counter/counter.component';
import { SearchPipe } from './search.pipe';
import { PayoutComponent } from './payout/payout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProductosComponent,
    LocationComponent,
    ContactComponent,
    NavBarComponent,
    ToolBarComponent,
    ProductDetailComponent,
    CounterComponent,
    SearchPipe,
    PayoutComponent,
    HistorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
