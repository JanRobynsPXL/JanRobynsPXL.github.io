import { Component, OnInit } from '@angular/core';
import {Activiteit} from "../models/Activiteit";
import {ApiServiceService} from "../Shared/api-service.service";

@Component({
  selector: 'app-lijst-van-activiteiten',
  templateUrl: './lijst-van-activiteiten.component.html',
  styleUrls: ['./lijst-van-activiteiten.component.css']
})
export class LijstVanActiviteitenComponent implements OnInit {

  seminaries: Activiteit[]
  innovaties: Activiteit[]
  persoonlijk: Activiteit[]

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.getSeminaries();
    this.getInnovaties();
    this.getPersoonlijk();
  }

  getSeminaries(){
    this.service.getSeminarie().subscribe(data => {
      this.seminaries = data;
    });
  }

  getInnovaties(){
    this.service.getInnovatie().subscribe(data => {
      this.innovaties = data;
    });
  }

  getPersoonlijk(){
    this.service.getPersoonlijk().subscribe(data => {
      this.persoonlijk = data;
    });
  }

}
