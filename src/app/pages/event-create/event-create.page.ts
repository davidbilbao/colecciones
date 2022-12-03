import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  eventName: string ="";
  eventDate: string = "";
  eventPrice: number= 0;
  eventCost: number= 0;

  constructor(private router: Router, private eventService: EventService) { 
 
  }

  ngOnInit() {
    
  }
    createEvent(
    eventName: String,
    eventDate: string,
    eventPrice: number,
    eventCost: number
  ):void{
    if(eventName === undefined ||
      eventPrice === undefined ||
      eventPrice === undefined ||
      eventCost === undefined){
        return;
      }
      this.eventService.createEvent(eventName,  eventDate, eventPrice, eventCost).then(()=> {
        this.router.navigateByUrl('home')
      });
  }

}
