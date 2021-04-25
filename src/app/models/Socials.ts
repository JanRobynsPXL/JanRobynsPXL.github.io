export class Socials {
  title: string;
  description: string;
  start_date: string;
  end_date: string;

  constructor(title: string, description: string, start_date: string, end_date: string) {
    this.title = title;
    this.description = description;
    this.start_date = start_date;
    this.end_date = end_date;
  }
}
