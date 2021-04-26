import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../Shared/api-service.service';
import {Talent} from '../models/Talent';

@Component({
  selector: 'app-reflectie',
  templateUrl: './reflectie.component.html',
  styleUrls: ['./reflectie.component.css']
})
export class ReflectieComponent implements OnInit {

  talenten: Talent[]

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.getTalents();
  }

  getTalents(){
    this.service.getTalents().subscribe(data => {
      this.talenten = data;
    })
  }

}
