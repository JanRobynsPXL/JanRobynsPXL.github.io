import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DigitalSkill} from '../models/DigitalSkill';
import {Language} from '../models/Language';
import {Activiteit} from "../models/Activiteit";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getDigitalSkills(){
    return this.http.get<DigitalSkill[]>('api/digital_skill')
  }

  getLanguage(){
    return this.http.get<Language[]>('api/language')
  }

  getSeminarie(){
    return this.http.get<Activiteit[]>('api/seminarie')
  }

  getInnovatie(){
    return this.http.get<Activiteit[]>('api/innovatie')
  }

  getPersoonlijk(){
    return this.http.get<Activiteit[]>('api/persoonlijk')
  }
}

/*
GET /api/digital_skill      alle digital skill objecten
GET /api/language           alle language objecten
GET /api/seminarie           alle language objecten
GET /api/innovatie           alle language objecten
GET /api/persoonlijk           alle language objecten
 */
