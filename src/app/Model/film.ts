import {genre} from "./genre";
import {production_company} from "./production_company";
import {spoken_language} from "./spoken_language";

export class film{
  id :number;

  title:string;
  poster_path:string;
  original_title:string;
  overview:string;
  release_date:string;

  genres:Array<genre>;
  production_companies:Array<production_company>;
  status:string;
  tagline:string;
  vote_count:number;
  vote_average:number;
  spoken_languages:Array<spoken_language>;
  runtime :number;
  revenue:number;
  homepage:string;
  original_language:string;
  popularity:number;
  budget:number;


  constructor(id: number, title: string, poster_path: string, original_title: string, overview: string, release_date: string, genres: Array<genre>, production_companies: Array<production_company>, status: string, tagline: string, vote_count: number, vote_average: number, spoken_languages: Array<spoken_language>, runtime: number, revenue: number, homepage: string, original_language: string, popularity: number, budget: number) {
    this.id = id;
    this.title = title;
    this.poster_path = poster_path;
    this.original_title = original_title;
    this.overview = overview;
    this.release_date = release_date;
    this.genres = genres;
    this.production_companies = production_companies;
    this.status = status;
    this.tagline = tagline;
    this.vote_count = vote_count;
    this.vote_average = vote_average;
    this.spoken_languages = spoken_languages;
    this.runtime = runtime;
    this.revenue = revenue;
    this.homepage = homepage;
    this.original_language = original_language;
    this.popularity = popularity;
    this.budget = budget;
  }
}
