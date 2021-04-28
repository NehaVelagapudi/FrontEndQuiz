import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LogicalComponent } from './logical/logical.component';
import { ContactComponent } from './contact/contact.component';
import { NumberComponent } from './number/number.component';

import { MathComponent } from './math/math.component';
import { FooterComponent} from './footer/footer.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"logical" , component:LogicalComponent},
  {path:"math",component:MathComponent},
  {path:"number",component:NumberComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"footer",component:FooterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
