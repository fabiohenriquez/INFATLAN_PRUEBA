import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppEndpoints {
  private endpoint: string;

    constructor(private httpClient: HttpClient) {
       /*  this.endpoint = "https://weatherdbi.herokuapp.com/data/weather/"; */
       this.endpoint = "https://run.mocky.io/v3/962c2494-02c3-4c03-b7f8-e0b87cb28cbd"
    }



    /* ------Methods to herokuapp-------- */
     get_weather_my_location (location:string): Observable<any>{
      return this.httpClient.get(this.endpoint, {responseType: 'json'});
    }

    get_weather_geoLocation (params:string, altitude:number): Observable<any>{
      return this.httpClient.get(this.endpoint + params, {responseType: 'json'});
    }

    get_weather_search(location:string): Observable<any>{
      return this.httpClient.get(this.endpoint + location, {responseType: 'json'});
    }
     /*------Methods to herokuapp-------- */




     /*------Method to run.mocky/*------ */
    get_weather_v2(): Observable<any>{
      return this.httpClient.get(this.endpoint, {responseType: 'json'});
    }
     /*------Method to run.mocky ------*/

}
