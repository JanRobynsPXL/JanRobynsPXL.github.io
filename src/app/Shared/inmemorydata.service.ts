import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InmemorydataService implements InMemoryDbService{
  createDb(){
    const digital_skill = [
      { id: 1, skillname: 'Python', skillamount:'5'},
      { id: 2, skillname: 'Angular', skillamount:'4.5'},
      { id: 3, skillname: 'MySQL/SQL Server', skillamount:'4'},
      { id: 4, skillname: '.NET', skillamount:'4'},
      { id: 5, skillname: 'Java', skillamount:'4'},
      { id: 6, skillname: 'HTML/CSS', skillamount:'4'},
      { id: 7, skillname: 'Keras', skillamount:'3'},
      { id: 8, skillname: 'FastAI', skillamount:'3'},
      { id: 9, skillname: 'Javascript', skillamount:'3'},
      { id: 10, skillname: 'Bootstrap', skillamount:'3'}
    ];

    const language = [
      { name: 'Dutch', proficiancy: 'Mother tongue' },
      { name: 'English', proficiancy: 'Fluent' },
      { name: 'French', proficiancy: 'Moderate' },
      { name: 'German', proficiancy: 'Basic' }
    ]

    const seminarie = [
      {title: 'Basis Agile workshop by Eurofins',
        omschrijving: 'In de workshop worden de basisprincipes van Agile en scrum aangeleerd. Hierna worden de theoretische aspecten hiervan omgezet naar een praktische setting',
        locatie: 'PXL, Gebouw G – EG514',
        tijdspanne: '10/03/2020 – 2 uur'
      },
      {title: 'Blockchain by Settlemint',
        omschrijving:'Een introductie tot blockchain en hoe het gebruikt wordt',
        locatie: ' PXL, Gebouw B – B134/Gebouw A – student hub',
        tijdspanne: '21/10/2020 – 3 uur, 28/10/2020 – 3 uur'
      },
      {title: 'Op weg naar 5G by Ericsson',
        omschrijving:'Een uitleg van wat 5G is en hoe het tot dit punt gekomen is',
        locatie: 'Online',
        tijdspanne: '25/11/2020 – 2 uur'
      },
      {title: 'Uitdagingen in de wereld van e-forensics & cybercrime by RCCU',
        omschrijving:'Een presentatie over het gebeuren van e-forensics binnen het politiedepartement',
        locatie: 'Online',
        tijdspanne: '16/12/2020 – 2 uur'
      }
    ]

    const innovatie = [
      {title: 'Low code',
        omschrijving: 'Een introductie tot het werken met een low code platform',
        locatie: 'PXL, Gebouw G – G118a/ Gebouw G – G118',
        tijdspanne: '08/10/2020 – 8 uur, 09/10/2020 – 4 uur'
      },
      {title: 'Google Hash code',
        omschrijving: 'Een hackathon georganiseerd door die wereldwijd werd georganiseerd',
        locatie: 'Online',
        tijdspanne: '25/02/2021 – 25 uur'
      }
    ]

    const persoonlijk = [
      {title: 'Portfolio',
        omschrijving: 'Het maken van een portfolio waar alle activiteiten van de afgelopen twee jaar instaan',
        locatie: 'PXL, Online',
        tijdspanne: '2019 – 2021 – 20 uur'
      },
      {title: 'POP-sessie: POPping',
        omschrijving: 'Een sessie rond zelfreflectie van IT’ers.',
        locatie: 'Gebouw B – B341',
        tijdspanne: '03/03/2020 – 2 uur'
      },
      {title: 'POP-sessie: Brein aan het werk, niet storen!',
        omschrijving: 'Een sessie rond geconcentreerd werken in een IT-omgeving',
        locatie: 'Gebouw B – B341',
        tijdspanne: '03/03/2020 – 2 uur'
      },
      {title: 'Development van deze website',
        omschrijving: 'Het maken van deze website aan de hand van Angular 8 en Bootstrap',
        locatie: 'Online',
        tijdspanne: 'Maart 2021 – April 2021'
      }
    ]
    return {digital_skill, language, seminarie, innovatie, persoonlijk}
  }

  genId(digital_skill: any[]): number {
    return digital_skill.length > 0 ? digital_skill.length + 1 : 1;
  }
}

/*
GET /api/digital_skill              alle digital skill objecten
GET /api/language           alle language objecten
GET /api/seminarie           alle language objecten
GET /api/innovatie           alle language objecten
GET /api/persoonlijk           alle language objecten
 */
