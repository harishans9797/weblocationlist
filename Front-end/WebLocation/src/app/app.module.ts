import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { LocationdetailsComponent } from './locationdetails/locationdetails.component';
import { LocationlistService } from './locationlist.service';
import { CitylistService } from './citylist.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { LoginComponent } from './login/login.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LocationlistComponent,
    LocationdetailsComponent,
    AddlocationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [LocationlistService, CitylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
