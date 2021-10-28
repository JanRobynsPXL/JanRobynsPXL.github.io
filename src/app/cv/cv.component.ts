import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../Shared/api-service.service';
import {DigitalSkill} from '../models/DigitalSkill';
import {Language} from '../models/Language';
import {Education} from "../models/Education";
import {Socials} from "../models/Socials";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  birthdate: Date;
  age: number;

  digitalskills: DigitalSkill[];
  languages: Language[];
  description: string;
  educations: Education[];
  socials: Socials[];

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.birthdate = new Date(2000,10,23);
    this.calculateAge();
    this.getDigitalSkills();
    this.getLanguages();
    this.getEducation();
    this.getSocials();
    this.setDescription();
  }

  calculateAge(): number {
    let timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    return this.age = Math.floor(timeDiff/(1000 * 3600 * 24) / 365.25);
  }

  getDigitalSkills(){
    this.service.getDigitalSkills().subscribe(data => {
      this.digitalskills = data;
    });
  }

  getLanguages(){
    this.service.getLanguage().subscribe(data => {
      this.languages = data;
    });
  }

  getEducation(){
    this.service.getEducation().subscribe(data => {
      this.educations = data;
    });
  }

  getSocials(){
    this.service.getSocials().subscribe(data => {
      this.socials = data;
    });
  }

  setDescription() {
    this.description =
      "I am a student who likes to make life easier and more enjoyable by developing new applications. " +
      "My primary interests are in A.I., machine learning and data. " +
      "Other things I like to spend my time on are playing guitar and piano. "
  }
}
