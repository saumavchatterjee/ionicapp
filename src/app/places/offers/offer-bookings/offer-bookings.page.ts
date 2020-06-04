import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { NavController } from '@ionic/angular';
import { PlaceService } from '../../place.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  constructor(private activelink:ActivatedRoute, private nvctrl:NavController, private placeservice:PlaceService) { }

  _place:Place

  ngOnInit() {

    this.activelink.paramMap.subscribe(pram =>{
       
      if(!pram.has('placeID'))
      {
        this.nvctrl.navigateBack('/places/tabs/offers')
        return 
      }

      this._place = this.placeservice.getplace(pram.get('placeID'))

    })

  }

}
