import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';


//Array de rutas validado
const routes: Routes = [
  {path:"about",component:AboutUsComponent},
  {path:"animal",component:AnimalsComponent},
  {path:"contact",component:ContactComponent},
  {path:"location",component:LocationComponent},
  {path:'', redirectTo: '/about',pathMatch:'full'},
  {path:"**",component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
