import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../../config';
import {map} from "rxjs/operators";
import {Track} from "../entity/track";

@Injectable({providedIn: 'root'})
export class TrackService {
  constructor(private http: HttpClient) { }

  getTracksObserver(playlistId: string): Observable<Track[]> {
    const params = '?client_id=' + config.clientId + '&id=' + playlistId + '&order=track_position';
    const url = config.apiUrl + 'playlists/tracks' + params;

    return this.http.get<any>(url).pipe(
        map(({results}) => {
          let tracks: Track[] = [];
          for(let trackJson of results[0].tracks) {
            let track = new Track();
            Object.assign(track, trackJson);
            tracks.push(track);
          }

          return tracks;
        })
    );
  }
}
