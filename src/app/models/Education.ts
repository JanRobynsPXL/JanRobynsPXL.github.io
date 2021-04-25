export class Education{
  institution: string
  education: string;
  start_date: string
  end_date: string

  constructor(institution: string, education: string, start_date: string, end_date: string) {
    this.institution = institution;
    this.education = education;
    this.start_date = start_date;
    this.end_date = end_date;
  }
}
