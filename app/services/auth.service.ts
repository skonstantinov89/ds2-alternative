import { Observable } from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class authService{
    private base_url = 'http://sconsttech.eu';
    private auth_type = 'JWT';
    private loggedIn = false;
    private login_url = '/auth/login/';
    private auth_me_url = '/auth/me/';

    constructor(private _http: Http){
        //_http - _ is not necessery but if its a service module (Http in this case) its a good practice
        console.log('Auth service initialized...');       
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    authenticate(username: string, password: string){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this.base_url+this.login_url, JSON.stringify({username,password}),{headers})
                    .map(res => res.json())
                    .map((res) => {
                        console.log ('res status: ' + res.token);
                        if (res){
                            localStorage.setItem('auth_token', res.token);
                            this.loggedIn = true;
                            return res.token;
                        }
                        else{
                            return false;
                        }
                    });

    }
    isLoggedIn(){
        return this.loggedIn;
    }
    checkGroup(token: any){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.auth_type + ' ' + token+'1');
        return this._http.get(this.base_url+this.auth_me_url,{headers})
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(false)); 
    }
}
