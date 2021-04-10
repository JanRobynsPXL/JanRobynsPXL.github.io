export class DigitalSkill{
  id: number;
  skillname: string;
  skillamount: number;


  constructor(id: number, skillname: string, skillamount: number) {
    this.id = id;
    this.skillname = skillname;
    this.skillamount = skillamount;
  }
}
