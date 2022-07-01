import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { AppEndpoints } from 'src/app/services/app-endpoint';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public weather_days:Array<Weather> = []
   public text_field:string = ""
   public region:string = ""

  constructor(private endpoint:AppEndpoints) { }

  ngOnInit(): void {
  }

  get_weather(){
    this.endpoint.get_weather_v2().subscribe(res=>{


      let temp0:any = res[0].next_days
      let temp:Array<Weather> = []
      this.region = res[0].region
      temp0.forEach((element: Weather) => {

          temp.push(element)
      });

      this.weather_days = temp

    })

  }

  onSubmit(){
      let region_temp1= "tegucigalpa"
      let region_temp2 = "london"

    if(this.text_field!=region_temp2 || this.text_field!=region_temp1 || this.text_field == "" ){
      this.region = "Region no valida"
      this.weather_days = []
    }
    if(this.text_field== region_temp1){

      this.geoLocation()
    }
    if(this.text_field == region_temp2){

       this.get_weather()
    }

  }

  geoLocation(){

    this.endpoint.get_weather_v2().subscribe(res=>{

      let temp0:any = res[1].next_days

      this.region = res[1].region
      let temp:Array<Weather> = []

      temp0.forEach((element: Weather) => {
          temp.push(element)
      });

      this.weather_days = temp
    })
  }

}

export interface Weather{
  day:string;
  max_temp:type;
  min_temp:type;
  iconURL:string

}

export interface type{
  c:string
  f:string
}


