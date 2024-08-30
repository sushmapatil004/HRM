import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './property/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './Service/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property/property-details/property-details.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './property/registration/registration.component';
import { LoginComponent } from './property/login/login.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { UserService } from './Service/user.service';
import { AuthService } from './Service/auth.service';




import { MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';



const appRouts: Routes = [
  { path: '', redirectTo: 'buy-property', pathMatch: 'full' },
  { path: 'buy-property', component: PropertyListComponent, data: { sellRent: 1 } }, // For Sale
  { path: 'rent-property', component: PropertyListComponent, data: { sellRent: 2 } }, // For Rent
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'property-detail/:id', component: PropertyDetailsComponent },
  { path: 'user-login', component: LoginComponent },
  { path: 'user-registration', component: RegistrationComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PropertyDetailsComponent,
    PropertyListComponent,
    PropertyCardComponent,
    AddPropertyComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    FilterPipe,
    SortPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    RouterModule.forRoot(appRouts),
    MatRadioModule,
    MatStepperModule,

    MatInputModule,

    MatButtonModule,

    
    
    
    
 
    
   
  ],
  providers: [HousingService,AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
