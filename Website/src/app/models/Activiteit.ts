export class Activiteit{
  title: string;
  omschrijving: string;
  locatie: string;
  tijdspanne: string;

  constructor(title: string, omschrijving: string, locatie: string, tijdspanne: string) {
    this.title = title;
    this.omschrijving = omschrijving;
    this.locatie = locatie;
    this.tijdspanne = tijdspanne;
  }
}
