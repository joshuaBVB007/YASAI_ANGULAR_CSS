import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { LocationComponent } from './location/location.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


//Array de rutas validado
const routes: Routes = [
  {path:"about",component:AboutUsComponent},
  {path:"animal",component:AnimalsComponent},
  {path:"contact",component:ContactComponent},
  {path:"location",component:LocationComponent},
  {path:"details/:img/:nombre_producto",component:ProductDetailComponent,
  children:[
    {path:"info",component:InfoProductComponent},
  ]
  },
  {path:'', redirectTo: '/about',pathMatch:'full'},
  {path:"**",component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
