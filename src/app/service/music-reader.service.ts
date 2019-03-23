import {Injectable} from '@angular/core';
import {Track} from '../entity/track';
import {BehaviorSubject} from 'rxjs';
import {CounterApiService} from './counter-api.service';

@Injectable({
    providedIn: 'root'
})
export class MusicReaderService {
    private tracks: Track[] = [];

    private track = new BehaviorSubject(null);
    currentTrack = this.track.asObservable();

    private index = 0;

    audio = new Audio();
    isPause = true;

    constructor(private counterApiService: CounterApiService) {
        this.audio.onended = () => this.onNextTrack();
    }

    onChangeCurrentPlaylist(tracks: Track[]) {
        if (!this.isPause) {
            this.audio.pause();
            this.isPause = true;
            return;
        }
        if (this.tracks[this.index]) {
            this.tracks[this.index].isPlay = false;
        }
        this.tracks = tracks;
        this.tracks[0].isPlay = true;
        this.track.next(this.tracks[0]);
        this.counterApiService.postTrack(this.tracks[this.index]);
    }

    onChangeTrack(tracks: Track[], track: Track, index: number) {
        if (track.isPlay) {
            this.audio.pause();
            this.isPause = true;
            track.isPlay = false;
            return;
        }
        if (this.tracks[this.index]) {
            this.tracks[this.index].isPlay = false;
        }
        this.tracks = tracks;
        this.index = index;
        this.tracks[this.index].isPlay = true;
        this.track.next(this.tracks[this.index]);
        this.counterApiService.postTrack(this.tracks[this.index]);
    }

    onNextTrack() {
        this.tracks[this.index].isPlay = false;
        if (this.tracks[++this.index] === undefined) {
            this.index = 0;
        }
        this.tracks[this.index].isPlay = true;
        this.track.next(this.tracks[this.index]);
        this.counterApiService.postTrack(this.tracks[this.index]);
    }

    onPreviousTrack() {
        this.tracks[this.index].isPlay = false;
        if (this.tracks[--this.index] === undefined) {
            this.index = this.tracks.length - 1;
        }
        this.tracks[this.index].isPlay = true;
        this.track.next(this.tracks[this.index]);
        this.counterApiService.postTrack(this.tracks[this.index]);
    }
}
