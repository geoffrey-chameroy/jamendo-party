import {Component, OnInit} from '@angular/core';
import {MusicReaderService} from '../../service/music-reader.service';
import {Track} from '../../entity/track';

@Component({
    selector: 'app-music-reader',
    templateUrl: './music-reader.component.html',
    styleUrls: ['./music-reader.component.less']
})
export class MusicReaderComponent implements OnInit {
    private track: Track;
    private time = 0;

    constructor(private musicReaderService: MusicReaderService) {
    }

    ngOnInit() {
        this.musicReaderService.currentTrack.subscribe(currentTrack => {
            this.track = currentTrack;
            if (this.track) {
                this.musicReaderService.audio.src = this.track.audio;
                this.musicReaderService.audio.play();
                this.musicReaderService.isPause = false;

                this.musicReaderService.audio.ontimeupdate = () => {
                    this.time = Math.floor(this.musicReaderService.audio.currentTime);
                };
            }
        });
    }

    onProgressSlider(event) {
        this.musicReaderService.audio.currentTime = this.musicReaderService.audio.duration * event.target.value / 100;
    }

    onSwitchPause() {
        this.musicReaderService.isPause = !this.musicReaderService.isPause;
        this.musicReaderService.isPause ? this.musicReaderService.audio.pause() : this.musicReaderService.audio.play();
    }
}
