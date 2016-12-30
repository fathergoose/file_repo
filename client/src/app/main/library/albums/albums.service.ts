import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Album } from './album';
import { Track } from '../tracks/track';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AlbumsService {
private apiUrl: string = 'api/albums';

    constructor(private http: Http) { }

    public getAlbums (): Observable<Album[]> {
        return this.http.get(this.apiUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    public getTracksFromAlbum (album: Album): Observable<Track[]> {
        return this.http.get(this.apiUrl + '/' + album.album)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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