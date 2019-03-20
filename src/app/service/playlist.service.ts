import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../../config';

@Injectable({providedIn: 'root'})
export class PlaylistService {
    constructor(private http: HttpClient) { }

    getPlaylistsObserver(): Observable<any> {
        const params = '?client_id=' + config.clientId + '&order=creationdate_desc&namesearch=best of';

        return this.http.get(config.apiUrl + 'playlists' + params);
    }
}
