import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { PlaceService } from '../../place.service';
import { BookingComponent } from 'src/app/bookings/booking/booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(
              private nvctrl:NavController, 
              private router:Router, 
              private activelink:ActivatedRoute, 
              private placeservice:PlaceService,
              private modalctrl:ModalController,
              private actionCtrl:ActionSheetController
              
              ) { }

  _place:Place

  ngOnInit() {

    this.activelink.paramMap.subscribe(pram=>{
       if(!pram.has('placeID'))
       {
         return 
       }

       this._place=this.placeservice.getplace(pram.get('placeID'))


    })


  }


  onbooking()
  {
   
   // console.log('Booked');
   // this.nvctrl.navigateBack('/places/tabs/discover')
    //this.nvctrl.pop()
    //this.router.navigateByUrl('/places/tabs/discover')

    this.actionCtrl.create({
      header:'Select Date Option',
      buttons:[
        {
          text: 'Select Date',
          handler:()=>{
            this.bookingModal('select')
          }
        },
        {
          text: 'Random Date',
          handler:()=>{
            this.bookingModal('random')
          }
        },
        {
          text: 'Cancel',
          role:'cancel'
        },

        
      ]
    }).then(actionEle => {
      actionEle.present();
    })

  }

  bookingModal(mode:'select'|'random')
  {

    console.log(mode)
    this.modalctrl.create({
      component:BookingComponent,
      componentProps:{selectedData:this._place}
 
 
    }).then(mdalele=> {
      mdalele.present()
     return mdalele.onDidDismiss()
     }).then(resultdata=>{
 
       console.log(resultdata.data, resultdata.role)
 
     });
  }

}
