import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../place.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(private placeservice:PlaceService, private nvctrl:NavController) { }

   offer_places:Place[] 

  ngOnInit() {

    
  }

  ionViewDidEnter()
  {
    this.offer_places=this.placeservice.places;
  }


  onAddOffer()
  {
    this.nvctrl.navigateForward('/places/tabs/offers/new-offer')
  }

  

}
