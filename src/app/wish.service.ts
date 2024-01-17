import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) { }
  private getStandardOptions():any {
    return{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
  }
  getWishes(){
    let options=this.getStandardOptions();
    options.params=new HttpParams({
      fromObject:{
        format:'json'
      }
    });
   return this.http.get('assets/wishes.json',options)
  }
  addWish(wish:WishItem){
    let options=this.getStandardOptions();
    options.headers=options.headers.set('Authorisation','value-need-for-authorisation');
    this.http.post('assets/wishes.json',wish,options);
  }
}
