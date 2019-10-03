import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(public _http: HttpClient) { }

  getPlayers(){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders().set("x-rapidapi-key", "a4ebfdaaf7msh209cafcb4e6bc3bp1ef881jsn5304e9d45eb3");
      this._http.get('https://free-nba.p.rapidapi.com/players', {headers: headers}).
        subscribe(
          res => {
            resolve(res)
          },
          err => {
            reject(err);
          }
        );
    })
    
  }
  getPlayer(playerId){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders().set("x-rapidapi-key", "a4ebfdaaf7msh209cafcb4e6bc3bp1ef881jsn5304e9d45eb3");
      this._http.get('https://free-nba.p.rapidapi.com/players/' + playerId, {headers: headers}).
        subscribe(
          res => {
            resolve(res)
          },
          err => {
            reject(err);
          }
        );
    })
    
  }
}
