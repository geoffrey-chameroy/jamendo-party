import {Injectable} from '@angular/core';
import {Track} from '../entity/track';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MusicReaderService {
    private tracks: Track[] = [];

    private track = new BehaviorSubject(null);
    currentTrack = this.track.asObservable();

    private index: number = 0;

    constructor() {
    }

    onChangeCurrent(track: Track) {
        this.onAddToPlaylist(track);
        this.track.next(track);
    }

    onAddToPlaylist(track: Track) {
        this.tracks.push(track);
    }

    onNextTrack() {
        if (this.tracks[++this.index] == undefined) {
            --this.index;
        }

        this.onChangeCurrent(this.tracks[this.index]);
    }

    onPreviousTrack() {
        if (this.tracks[--this.index] == undefined) {
            this.index = 0;
        }

        this.onChangeCurrent(this.tracks[this.index]);
    }
}
