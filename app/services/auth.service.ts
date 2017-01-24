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
                    .catch((error:any) => Observable.throw({'status': 400})).share()
                    .map((res: Response) => {
                        let result = res.json();
                        console.log(result.token);
                        console.log('successful login');
                        return {'status': 200, 'token': result.token};
                    });

    }
    isLoggedIn(){
        return this.loggedIn;
    }
    checkGroup(token: any){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.auth_type + ' ' + token);
        return this._http.get(this.base_url+this.auth_me_url,{headers})
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(false));
    }
}
