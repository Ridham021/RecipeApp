import {Component, OnInit} from '@angular/core';
import {SwitchServices} from "./services/switch.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


   inactiveUsers:string[] = [];

   constructor(private switchUser : SwitchServices) {
   }

  ngOnInit() {

    this.inactiveUsers = this.switchUser.inactiveUsers;
   }



}
