import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MathComponent } from './math/math.component';
import { NumberComponent } from './number/number.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LogicalComponent } from './logical/logical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MathComponent,
    NumberComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    LogicalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
