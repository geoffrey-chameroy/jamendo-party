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
    private audio = new Audio();

    private time: number = 0;
    private isPause: boolean = true;

    constructor(private musicReaderService: MusicReaderService) {
    }

    ngOnInit() {
        this.musicReaderService.currentTrack.subscribe(currentTrack => {
            this.track = currentTrack;
            if (this.track) {
                this.audio.src = this.track.audio;
                this.audio.play();
                this.isPause = false;

                this.audio.ontimeupdate = () => {
                    this.time = Math.floor(this.audio.currentTime);
                };
            }
        });
    }

    onProgressSlider(event) {
        this.audio.currentTime = this.audio.duration * event.target.value / 100;
    }

    onSwitchPause() {
        this.isPause = !this.isPause;
        this.isPause ? this.audio.pause() : this.audio.play();
    }
}
