import { Injectable } from '@angular/core';
import {Place} from './place.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

private _places:Place[]=[

        {
          id:'p1',
          title:'The Victoria Memorial',
          description:'This ia a romantic place of kolkata',
          imageurl:'https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/5/05648444-7dc7-4c71-9a25-656e98a6a0a0.jpg',
          price:50.00,
          fromdate: new Date(),
          todate: new Date(),
          userID: 'sau'
        },
        {
          id:'p2',
          title:'Eco Park',
          description:'This ia a larger family park of hangout.',
          imageurl:'https://upload.wikimedia.org/wikipedia/commons/d/da/Lush_green_grass_along_the_lake.jpg',
          price:30.00,
          fromdate: new Date(),
          todate: new Date(),
          userID: 'sau'
        },
        {
          id:'p3',
          title:'Science City',
          description:'This is a science museum',
          imageurl:'https://images.indianexpress.com/2020/03/science-city-fb.jpg',
          price:100.00,
          fromdate: new Date(),
          todate: new Date(),
          userID: 'sau'
        }



        ]

  

  constructor(private autthService:AuthService) { }

  get places()
  {
    return [...this._places];
  }


  getplace(id:string)
  {
    return this._places.find(p => 
      {
       return  p.id===id 

      })
  }

  addPlace(title,description,price,fromdate,todate)
  {

 var  newdata:Place = {
    id: Math.random().toString(36),
    title:title,
    description:description,
    imageurl:'https://images.indianexpress.com/2020/03/science-city-fb.jpg',
    price: price,
    fromdate:fromdate,
    todate:todate,
    userID: this.autthService.userID
   };

 
    this._places.push(newdata)
  }


}
