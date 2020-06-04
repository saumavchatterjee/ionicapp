import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {


  @Input () selectedData:Place

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}


  onConfirm()
  {

    this.modalCtrl.dismiss({time:'5pm',date:'2/5/2020'},'confirm');


  }

  onCancel()
  {
    this.modalCtrl.dismiss(null,'cancel');
  }

}
