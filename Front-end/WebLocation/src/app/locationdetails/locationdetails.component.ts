import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../Location';
import { LocationlistService } from '../locationlist.service';
import { CitylistService } from '../citylist.service';
import { City } from '../City';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-locationdetails',
  templateUrl: './locationdetails.component.html',
  styleUrls: ['./locationdetails.component.css']
})
export class LocationdetailsComponent implements OnInit {

  location = new Location();
  city = new City();
  restapis: any;
  cityrest: any;
  cities: City[];
  cityNames: string[] = new Array();
  getCityid = 0;
  url: SafeResourceUrl;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private locationlistservice: LocationlistService,
    private citieslistservice: CitylistService,
    private http: HttpClient,
    private sanitizer:DomSanitizer
    ) {
     }

     retrievedObject = localStorage.getItem("token");
     
     private headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.retrievedObject);
     httpOptions = {
       headers: this.headers_object
       };   

  ngOnInit() 
  {
    this.location.Id_Location = this.activatedRoute.snapshot.params["id"];
    //console.log(this.location.Id_Location);
    this.locationDetails();
    this.citiesGet();
  }

  locationDetails()
  {
    this.locationlistservice.getLocation(this.location.Id_Location).subscribe(
    (data: any) => ((this.restapis = data),
      (
        this.location.Name = this.restapis.name,
        this.location.Address = this.restapis.address,
        this.location.Longitude = this.restapis.longitude,
        this.location.Latitude = this.restapis.latitude,
        this.location.Id_City = this.restapis.id_City,
        this.getCityid = this.restapis.id_City,
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q='+this.location.Latitude+','+this.location.Longitude+'&hl=en&z=14&amp;&output=embed')
        ),
        this.cityGet()
      )
      );
    }
    //get Location City
    cityGet()
    {
      this.citieslistservice.getCity(this.location.Id_City).subscribe(
      (data: any) => ((this.cityrest = data),
      (
        this.city.Id_City = this.cityrest.id_City,
        this.city.City_name = this.cityrest.city_name
      )));
    }

    //get all Cities for Location update
    citiesGet()
    {
      this.citieslistservice.getCities().subscribe(
        (data: City[]) => (this.cities = data,
          this.cityNames[0] = data[0].City_name)
        );
    }

    httpPutExample() {
      console.log(this.getCityid);
     
      this.http.put("https://localhost:5001/api/locations/" +  this.location.Id_Location,
      {
        "id_Location": this.location.Id_Location,
        "name": this.location.Name,
        "address": this.location.Address,
        "longitude": this.location.Longitude,
        "latitude": this.location.Latitude,
        "id_City": this.getCityid
      }, this.httpOptions)
      .subscribe(
        data  => {
          console.log("PUT Request is successful ", data);
          this.gotoList();
        },
        error  => {
          console.log("Error", error);
        });
      }
      
      gotoList() {
      this.router.navigate(['/locationlist']);
      }
}
