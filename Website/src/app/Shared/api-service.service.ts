import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DigitalSkill} from '../models/DigitalSkill';
import {Language} from '../models/Language';

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
}

/*
GET /api/digital_skill      alle digital skill objecten
GET /api/language           alle language objecten
 */
