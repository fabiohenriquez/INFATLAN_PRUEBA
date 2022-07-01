import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() childMessage: string | undefined;
  /* @Input() day: string;
  @Input() min: string;
  @Input() max: string;
  @Input() image: string;
 */
  constructor() {

    console.log("llego,", this.childMessage)
   }

  ngOnInit(): void {
  }

}

