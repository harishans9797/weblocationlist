import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../Location';
import { LocationlistService } from '../locationlist.service';
import { CitylistService } from '../citylist.service';
import { City } from '../City';
import {LocationlistComponent} from '../locationlist/locationlist.component';



@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {

  @ViewChild(LocationlistComponent, {static:false}) child:LocationlistComponent;
  
  loc = new Location();
  cit = new City();
  cities: City[];
  locations: Location[];
  name = false;
  address = false;
  town = false;
  latit = false;
  longit = false;
  error: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private locationlistservice: LocationlistService,
    private citieslistservice: CitylistService,
    private http: HttpClient
    
  ) { }

  ngOnInit() {
    this.citiesGet();
  }
  //get all Cities for Location update
  citiesGet()
  {
    this.citieslistservice.getCities().subscribe(
      (data: City[]) => (this.cities = data)
      );
  }
  onSubmit()
  {
    if(this.loc.Name==null){
      this.name=true;
      return console.log("All fields are mandatory");
    }
    if(this.loc.Address==null){
      this.address=true;
      return console.log("All fields are mandatory")
    }
    if(this.loc.Id_City<=0){
      this.town=true;
      return console.log("All fields are mandatory")
    }
    if(this.loc.Latitude==null){
      this.latit=true;
      
    }
    if(this.loc.Longitude==null){
      this.longit=true;
      
    }
    return this.locationlistservice.addLocation(this.loc).subscribe(
      data => this.locations.push(data)),
      (error => this.error = error),
      this.gotoList();
    }

    gotoList() {
      this.router.navigate(['/locationlist']);
    }
  }
