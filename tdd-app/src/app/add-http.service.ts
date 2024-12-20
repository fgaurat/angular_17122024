import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddHttpService {

  http:HttpClient = inject(HttpClient)
  private url = "http://localhost:3000/sum"
  constructor() { }

  add(a:number,b:number){
    const sum_url = `${this.url}?a=${a}&b=${b}`
    return this.http.get<number>(sum_url)
  }
}
