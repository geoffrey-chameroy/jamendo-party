import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../service/playlist.service';

@Component({
    selector: 'app-playlists',
    templateUrl: './playlists.component.html',
    styleUrls: ['./playlists.component.less']
})
export class PlaylistsComponent implements OnInit {
    constructor(
        private playlistService: PlaylistService
    ) {
    }

    ngOnInit() {
        this.playlistService.getPlaylists();
    }
}
