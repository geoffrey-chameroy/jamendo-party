import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../../config';
import {Playlist} from '../entity/playlist';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PlaylistService {
    constructor(private http: HttpClient) { }

    getPlaylistsObserver(): Observable<Playlist[]> {
        const params = '?client_id=' + config.clientId + '&order=creationdate_desc&namesearch=best of';
        const url = config.apiUrl + 'playlists' + params;

        return this.http.get<any>(url).pipe(
            map(({results}) => {
                let playlists: Playlist[] = [];
                for(let playlistJson of results) {
                    let playlist = new Playlist();
                    Object.assign(playlist, playlistJson);
                    playlists.push(playlist);
                }

                return playlists;
            })
        );
    }

    getPlaylistObserver(playlistId: string): Observable<Playlist> {
        const params = '?client_id=' + config.clientId + '&id=' + playlistId;
        const url = config.apiUrl + 'playlists' + params;

        return this.http.get<any>(url).pipe(
            map(({results}) => {
                let playlist = new Playlist();
                Object.assign(playlist, results[0]);

                return playlist;
            })
        );
    }
}
