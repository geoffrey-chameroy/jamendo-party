import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Playlist} from '../entity/playlist';
import {Track} from '../entity/track';
import {PlaylistService} from '../service/playlist.service';
import {TrackService} from '../service/track.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {
    playlist: Playlist;
    tracks: Track[];

    constructor(
        private route: ActivatedRoute,
        private playlistService: PlaylistService,
        private trackService: TrackService
    ) {
    }

    ngOnInit() {
        const playlistId = this.route.snapshot.paramMap.get('id');

        this.getPlaylist(playlistId);
        this.getTracks(playlistId);
    }

    getPlaylist(playlistId: string): Promise<any> {
        return new Promise(resolve => {
            this.playlistService.getPlaylistObserver(playlistId).subscribe(playlist => {
                this.playlist = playlist;
                resolve(this.playlist);
            });
        });
    }

    getTracks(playlistId: string): Promise<any> {
        return new Promise(resolve => {
            this.trackService.getTracksObserver(playlistId).subscribe(tracks => {
                this.tracks = tracks;
                resolve(this.tracks);
            });
        });
    }
}
