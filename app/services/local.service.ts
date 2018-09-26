import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  set(key,value){
    return localStorage.setItem(key,value);
  }

  get(key){
    return localStorage.getItem(key);
  }

}

