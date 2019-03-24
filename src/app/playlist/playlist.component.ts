import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlaylistService} from '../service/playlist.service';
import {MusicReaderService} from '../service/music-reader.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        public playlistService: PlaylistService,
        public musicReaderService: MusicReaderService
    ) {
    }

    ngOnInit() {
        const playlistId = this.route.snapshot.paramMap.get('id');

        this.playlistService.getPlaylist(playlistId);
    }
}
