import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, ResponseGifsAPI } from './interfaces/response-gifs-api';
import { Observable  } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private http = inject(HttpClient);
  private tag: string = '';
  public gifsData: Gif[] = []

  constructor(){
    this.loadLocalStorage()
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }


  private organizeHistory(tag: string): void{
    tag = tag.toLowerCase()
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((item)=> item !== tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0,9)
    this.saveLocalStorage(this._tagsHistory)
  }
  public searchTag(tag: string): void{
    if(!tag) return;
    this.tag = tag
    this.organizeHistory(tag)
    this.getSearchGifs(tag)
  }


  public getSearchGifs(tag: string,limit: number = 12): any{
    const params = new HttpParams()
    .set('api_key', environment.API_KEY)
    .set('limit' , limit)
    .set('q', tag)
    this.http.get<ResponseGifsAPI>(`${environment.PATH_API}search`, {params})
   .subscribe((response: ResponseGifsAPI)=> this.gifsData = response.data)
  }

  private saveLocalStorage(tags: string[]): void{
      localStorage.setItem('tagsHistory', JSON.stringify(tags))
  }
  private loadLocalStorage(): void{
   if(!localStorage.getItem('tagsHistory')) return
    this._tagsHistory =   JSON.parse(localStorage.getItem('tagsHistory')!)
    if(this._tagsHistory.length === 0) return
     this.searchTag(this._tagsHistory[0])
  }


}
