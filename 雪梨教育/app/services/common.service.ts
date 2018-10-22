import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CommonService {

  constructor() {
    //在函数里执行语句let a;  function(){}
    //在它的外层只能写方法和属性
    // let a;
    // console
   }
  set(key,value){
    return localStorage.setItem(key,value);
  }

  get(key){
    return localStorage.getItem(key);
  }

}
