import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private placeservice: PlaceService) { }

  public loded_places:Place[]

  ngOnInit() {

    this.loded_places=this.placeservice.places;
    console.log(this.loded_places);

  }
  onChnagesgment(ev:any)
  {
    console.log(ev.detail)
  }

}
