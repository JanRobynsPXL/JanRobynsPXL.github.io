import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InmemorydataService implements InMemoryDbService{
  createDb(){
    const digital_skill = [
      { id: 1, skillname: 'Python', skillamount:'5'},
      { id: 2, skillname: 'Angular', skillamount:'4.5'},
      { id: 3, skillname: 'MySQL/SQL Server', skillamount:'4.5'},
      { id: 4, skillname: '.NET', skillamount:'4'},
      { id: 5, skillname: 'Java', skillamount:'4'},
      { id: 6, skillname: 'HTML/CSS', skillamount:'4'},
      { id: 7, skillname: 'Javascript', skillamount:'3.5'},
      { id: 8, skillname: 'Bootstrap', skillamount:'3'}
    ];

    const language = [
      { name: 'Dutch', proficiancy: 'Mother tongue' },
      { name: 'English', proficiancy: 'Fluent' },
      { name: 'French', proficiancy: 'Moderate' },
      { name: 'German', proficiancy: 'Basic' }
    ]

    return {digital_skill, language}
  }

  genId(digital_skill: any[]): number {
    return digital_skill.length > 0 ? digital_skill.length + 1 : 1;
  }
}

/*
GET /api/digital_skill              alle digital skill objecten
GET /api/language           alle language objecten
 */
