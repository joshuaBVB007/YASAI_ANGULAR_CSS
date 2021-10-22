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
import { MatomoModule } from 'ngx-matomo';
import { NgxMatomoTrackerModule } from '@ngx-matomo/tracker';
import { NgxMatomoRouterModule } from '@ngx-matomo/router';




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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    
    NgxMatomoTrackerModule.forRoot({
      siteId: '4', // your Matomo's site ID (find it in your Matomo's settings)
      trackerUrl: 'https://jona.matomo.cloud', // your matomo server root url
    }),
    //matomo router*/
    NgxMatomoRouterModule, // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
