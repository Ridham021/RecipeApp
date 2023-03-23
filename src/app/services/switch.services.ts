import {Injectable} from "@angular/core";
import {CounterServices} from "./counter.services";


@Injectable({providedIn:'root'})
export class SwitchServices{

  activeUsers =['Max','Anna'];

  inactiveUsers = ['Chris','Manu'];

  constructor(private counter : CounterServices) {
  }

  onSetToInactive(id:number){
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id,1);
      this.counter.incrementActiveToInActive();
  }

  onSetToActive(id:number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counter.incrementInActiveActiveTo();
  }

}
