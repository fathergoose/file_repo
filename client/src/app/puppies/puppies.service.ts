import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Puppy } from './puppy';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PuppiesService {
    private apiUrl: string = 'api/puppies';

    constructor(private http: Http) { }

    getPuppies(): Observable<Puppy[]> {
        return this.http.get(this.apiUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    addPuppy(puppy: Puppy): Observable<Puppy> {
        return this.post(puppy);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private post(puppy: Puppy): Observable<Puppy> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiUrl, JSON.stringify(puppy), { headers: headers } )
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private delete(puppy: Puppy): Observable<Puppy> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.delete(this.apiUrl + '/' + puppy.id)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
