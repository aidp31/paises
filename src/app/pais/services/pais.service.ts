import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _country: any = [];

  constructor(private readonly http: HttpClient) { }

  get country() {
    return this._country
  }

  searchCountry(keywork: string) {
    this.http.get(`https://restcountries.com/v3.1/name/${keywork}`)
      .subscribe((country: any) => {
        this._country = country
      })

  }

}
