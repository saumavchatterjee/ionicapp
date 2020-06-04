import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { PlaceService } from '../../place.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  _place:Place

  form:FormGroup

  constructor(private router:ActivatedRoute, private placeservice:PlaceService) { }

  ngOnInit() {

  this.router.paramMap.subscribe(pram =>{

    if(!pram.has('placeID'))
    {
      return 
    }

    console.log(pram.get('placeID'))
    this._place= this.placeservice.getplace(pram.get('placeID'));
    console.log(this._place)

    this.form = new FormGroup({

      'title': new FormControl(this._place.title,
        { 
          updateOn:'blur',
          validators:[Validators.required]
       }),
       'description': new FormControl(this._place.description,
        { 
          updateOn:'blur',
          validators:[Validators.required,Validators.maxLength(180)]
       })


    })

  })

  }


  onEdit(){
    console.log(this.form)
  }



}
