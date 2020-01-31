import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { House } from 'src/app/models/house';

@Injectable()
export class HouseService {
    
    public url: string;
    public key: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = environment.url;
        this.key = environment.key;
    }


    // Método que permite obtener todas las casas registradas
    getHouses():Observable<any>{
        const url = `${this.url}houses?key=${this.key }`;
        return this._http.get(url)
        .pipe(
            map((houses:House[])=>{
                return houses;
            })
        );
    }

    // Método que permite obtener miembros por identificador del miembro
    getMembers(_id: string):Observable<any>{
        const url = `${this.url}houses/${_id}/?key=${this.key}`;
        return this._http.get(url)
        .pipe(
            map((response: any)=>{
                let resp = {
                    members : response[0].members,
                    nameHouse : response[0].name
                }
                return resp;
            })
        );
    }

    getMember(_id: string):Observable<any>{
        return this._http.get(this.url + 'characters/'+ _id + '/?key=' + this.key );
    }

    getMemberByName(name: string):Observable<any>{
        return this._http.get(this.url + 'characters?name='+ name + '&key=' + this.key );
    }
}