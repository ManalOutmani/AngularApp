export class spoken_language{
  engish_name:string;
  iso_639_1:string;
  name:string;

  constructor(engish_name: string, iso_639_1: string, name: string) {
    this.engish_name = engish_name;
    this.iso_639_1 = iso_639_1;
    this.name = name;
  }
}
