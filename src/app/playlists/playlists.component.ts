import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../service/playlist.service';
import {Track} from '../entity/track';
import {TrackService} from '../service/track.service';
import {Playlist} from '../entity/playlist';

@Component({
    selector: 'app-playlists',
    templateUrl: './playlists.component.html',
    styleUrls: ['./playlists.component.less']
})
export class PlaylistsComponent implements OnInit {
    playlists: Playlist[];
    tracks: Track[];

    constructor(private playlistService: PlaylistService, private trackService: TrackService) {
    }

    ngOnInit() {
        this.getPlaylists().then(() => {
            for (let playlist of this.playlists) {
                this.getTracks(playlist.id).then((tracks) => {
                    playlist.tracks = tracks;
                });
            }
        });
    }

    getPlaylists(): Promise<any> {
        return new Promise(resolve => {
            this.playlistService.getPlaylistsObserver().subscribe(playlists => {
                this.playlists = playlists;
                resolve(this.playlists);
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
