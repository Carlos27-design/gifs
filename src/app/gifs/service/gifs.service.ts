import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interface/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = '3hesXttiZaSoimEyUMqfr5djZSfiilf6';
  private URL: string = 'https://api.giphy.com/v1/gifs/search';

  constructor(private _http: HttpClient) {
    this.viewLocalStorage();
  }

  public gifList: Gif[] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this.saveLocalStorate();
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this._http
      .get<SearchResponse>(`${this.URL}`, { params })
      .subscribe((res) => {
        this.gifList = res.data;
        console.log(this.gifList);
      });
  }

  private saveLocalStorate(): void {
    localStorage.setItem('history', JSON.stringify(this.tagsHistory));
  }

  private viewLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);
  }
}
