import {Component, OnInit} from '@angular/core';
import {CounterApiService} from '../../service/counter-api.service';
import {Router} from '@angular/router';
import {PlaylistService} from '../../service/playlist.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.less']
})
export class TopbarComponent implements OnInit {

    constructor(
        private counterApiService: CounterApiService,
        private router: Router,
        private playlistService: PlaylistService
    ) {
    }

    ngOnInit() {
        this.counterApiService.setCount();
    }

    onSearch(value: string) {
        if (value.length < 1) {
            this.playlistService.searchSubject.next('');
            this.router.navigateByUrl('explore/playlists');
            return;
        }

        this.playlistService.searchSubject.next(value);
        this.router.navigateByUrl('search/' + value);
    }
}
