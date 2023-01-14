export class production_company{
  constructor(id: number, logo_path: string, name: string, origin_country: string) {
    this.id = id;
    this.logo_path = logo_path;
    this.name = name;
    this.origin_country = origin_country;
  }
  id:number;
  logo_path:string;
  name:string;
  origin_country:string;
}
