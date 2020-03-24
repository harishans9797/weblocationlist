import { Component, OnInit } from '@angular/core';
import { Location } from '../Location';
import { LocationlistService } from '../locationlist.service';
import { Router } from '@angular/router';
import { CitylistService } from '../citylist.service';
import { City } from '../City';
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.css']
})
export class LocationlistComponent implements OnInit {

  mod = false;
  locations: Location[];
  location = new Location();
  error: string;
  city = new City();
  cities: City[];
  faTrashAlt = faTrashAlt;
  
  
  constructor( private locationlistservice: LocationlistService, 
    private router: Router, 
    private citieslistservice: CitylistService) { }

  ngOnInit() {
    this. locationLoad();
    this.citiesGet(); 
  }

  locationLoad()
  {
    this.locationlistservice.getLocations().subscribe(
      (data: Location[]) => (this.locations = data),
      (error => this.error = error)
      );
      
  }
  modalActive(){
    this.mod=true;
  }
  modalExit(){
    this.mod=false;
  }

  deleteLocation(id: number) 
  {
    this.locationlistservice.deleteLocation(id).subscribe(
      () => {this.locationLoad()
      })
  }

  clickMethod(id : number) 
  {
    this.deleteLocation(id);
    this.modalExit();
  }

  openDetails(id : number){
    this.router.navigate(["locationdetails/"+ id]);
  }

  //get all Cities for Location update
  citiesGet()
  {
    this.citieslistservice.getCities().subscribe(
      (data: City[]) => (this.cities = data)
      );
  }

}
