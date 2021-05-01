import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InmemorydataService implements InMemoryDbService{
  createDb(){

    // CV Skills
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

    const education = [
      {
        institution: 'University College PXL',
        education: 'Professional bachelor in applied information technology with specialization in AI & Robotics',
        start_date: 'September 2018',
        end_date: 'June 2021'
      },
      {
        institution: 'Spectrum College OHVM Lummen',
        education: 'Mathematics Sciences',
        start_date: 'September 2012',
        end_date: 'June 2018'
      },
      {
        institution: 'Music Academy Beringen',
        education: 'Degree in music with specialization in piano',
        start_date: 'September 2009',
        end_date: 'June 2018'
      }
    ]

    const socials = [
      {
        title: 'Voluntary work in youth club NYX Lummen',
        description: 'Serving drinks to customers. Cleaning up after work hours. Keeping maintenance in the building.',
        start_date: 'September 2018',
        end_date: 'Present'
      },
      {
        title: 'Voluntary work with an IT function within the student fraternity Hexion',
        description: 'Maintaining the website of the fraternity. Helping with organising events.',
        start_date: 'September 2019',
        end_date: 'September 2020'
      }
    ]

    // Activities
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
        omschrijving: 'Een hackathon door Google georganiseerd die wereldwijd doorging',
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
      {title: 'POP-sessie: Feedback: the key to improvement',
        omschrijving: 'Een sessie over hoe een persoon goede feedback kan geven en hoe het voordelig kan uitdraaien.',
        locatie: 'Gebouw B, PXL',
        tijdspanne: '12/02/2020 – 2 uur'
      },
      {title: 'Projectweek 2019 – 2020',
        omschrijving: 'Een week van teambuilding om de student voor te bereiden voor hun eerste grote groepswerk',
        locatie: 'PXL',
        tijdspanne: '10/02/2020 – 14/02/2020'
      }
    ]

    const talents = [
      {
        title:'Empassie:',
        description: 'Na drie serieuze projecten en een paar seminaries, kan ik zeggen dat ik mij kan en durf in een teamverband te werken en dat ik empatie toon bij mijn collega’s en hun situaties. Mijn introvertheid van vroeger is weg en heeft plaats gemaakt voor iemand die aan doel wilt werken en het wilt bereiken. Niet alleen, maar door iedereen over de streep te krijgen. '
      },
      {
        title:'Ondernemen & innovatief:',
        description:'Door deze drie serieuze jaren heb ik geleerd om risico’s in te schatten en verantwoordelijkheid op te nemen. Vroeger kwam dit niet eens in opspraak omdat ik te intovert en te afwezig was binnen groepsgebeuren. Ik durf een leidersrol op te nemen en alle risico’s hiervan op te nemen.'
      },
      {
        title:'(internationaal) samen(net)werking:',
        description:'In het kader van internationale samenwerking ben ik beperkt geweest door de coronapandemie. Dit hield mij echter niet tegen om met de stage mijn grenzen te verleggen. Zo ben ik regionaal bekender geworden binnen Hasselt en kijk ik ernaar uit mijn grenzen internationaal te verleggen.'
      },
      {
        title:'Multi- & disciplinariteit:',
        description:'Het is belangrijk om van andere mensen te leren. Ik kan me inleven in andere vakken waar ik minder kennis van heb, maar toch iets succesvol wil van maken. Dit is van toepassing geweest bij het IT-project. Hierbij moest ik rekening houden en communiceren met het Elektronica-ICT departement van PXL zodat het project goed werd afgerond.'
      },
    ]


    return {digital_skill, language, seminarie, innovatie, persoonlijk, education, socials, talents}
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
