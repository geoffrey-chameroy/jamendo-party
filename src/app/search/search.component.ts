import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../service/playlist.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        public playlistService: PlaylistService
    ) {
    }

    ngOnInit() {
        const search = this.route.snapshot.paramMap.get('value');

        this.playlistService.getPlaylists(search);
    }
}
