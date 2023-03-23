import {Injectable} from "@angular/core";


@Injectable({providedIn:'root'})
export class CounterServices{

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInActive(){
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  incrementInActiveActiveTo(){
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }


}
