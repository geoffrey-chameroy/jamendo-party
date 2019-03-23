import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {config} from '../../config';
import {Playlist} from '../entity/playlist';
import {map} from 'rxjs/operators';
import {TrackService} from './track.service';

@Injectable({providedIn: 'root'})
export class PlaylistService {
    searchSubject = new Subject<string>();
    playlists: Playlist[];
    playlist: Playlist;

    constructor(
        private trackService: TrackService,
        private http: HttpClient
    ) {
        this.searchSubject.subscribe(search => this.getPlaylists(search));
    }

    getPlaylists(search: string = null): Promise<any> {
        this.playlists = [];
        return new Promise(resolve => {
            this.getPlaylistsObserver(search).subscribe(playlists => {
                this.playlists = playlists;
                resolve(this.playlists);
            });
        }).then(() => {
            for (let playlist of this.playlists) {
                this.trackService.getTracks(playlist.id).then((tracks) => {
                    playlist.tracks = tracks;
                });
            }
        });
    }

    private getPlaylistsObserver(search: string = null): Observable<Playlist[]> {
        search = search ? search : 'best of';
        const params = '?client_id=' + config.clientId + '&order=creationdate_desc&namesearch=' + search;
        const url = config.apiUrl + 'playlists' + params;

        return this.http.get<any>(url).pipe(
            map(({results}) => {
                let playlists: Playlist[] = [];
                for (let playlistJson of results) {
                    let playlist = new Playlist();
                    Object.assign(playlist, playlistJson);
                    playlists.push(playlist);
                }

                return playlists;
            })
        );
    }

    private getPlaylistObserver(playlistId: string): Observable<Playlist> {
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

    getPlaylist(playlistId: string): Promise<any> {
        this.playlist = null;
        return new Promise(resolve => {
            this.getPlaylistObserver(playlistId).subscribe(playlist => {
                this.playlist = playlist;
                resolve(this.playlist);
            });
        }).then(() => {
            this.trackService.getTracks(this.playlist.id).then((tracks) => {
                this.playlist.tracks = tracks;
            });
        });
    }
}
