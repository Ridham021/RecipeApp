import {Component, OnInit} from '@angular/core';
import {SwitchServices} from "../services/switch.services";

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit{
  activeUsers:string[] = [];
  constructor(private switchUser : SwitchServices) {
  }
  ngOnInit(){
    this.activeUsers = this.switchUser.activeUsers;
  }

}
