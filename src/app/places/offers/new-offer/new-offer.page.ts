import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaceService } from '../../place.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  constructor(private placeService:PlaceService) { }

  form:FormGroup



  ngOnInit() {

    this.form=  new FormGroup({

      'title': new FormControl(null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
          
        } ),
      'description': new  FormControl(null, [Validators.required,Validators.maxLength(200)]),
      'price': new FormControl(null,[Validators.required,Validators.min(1)]),
      'fromDate': new FormControl(null, [Validators.required]),
      'toDate': new FormControl(null, [Validators.required])

    })

  }

  onSubmit()
  {
    console.log(this.form);
    this.placeService.addPlace(

      this.form.value.title,
      this.form.value.description,
      this.form.value.price,
      this.form.value.fromDate,
      this.form.value.toDate
      
      )

      this.form.reset()


  }




 



}
