import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Track } from '../library/tracks/track';
import { TracksService } from '../library/tracks/tracks.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class MusicPlayerComponent implements OnInit {
    private errorMessage: string;
    private tracks: Track[];
    

    constructor(
        private playerService: PlayerService
    ) { }


    ngOnInit() {
        const _this = this;
        const progressBar: HTMLInputElement = <HTMLInputElement>document.getElementById('progress-bar');
        const playbackTime: HTMLSpanElement = document.getElementById('playback-time');
        const playbackDuration: HTMLSpanElement = document.getElementById('playback-duration');
        this.playerService.currentAudioElement.addEventListener('timeupdate', function () {
            progressBar.value = (this.currentTime / this.duration || 0).toString(); // or 0 keeps the progress bar from 50% when undefined
            playbackTime.innerHTML = _this.toMMSS(this.currentTime);
            playbackDuration.innerHTML = _this.toMMSS(this.duration);
        });
    }




    updatePlaybackTime(value: number): void {
        let playbackTime = value * this.playerService.currentAudioElement.duration;
        this.playerService.currentAudioElement.currentTime = playbackTime;
    }

    play(event: Event): void {
        event.stopPropagation();
        this.playerService.play();
    }

    pause(event: Event): void {
        event.stopPropagation();
        this.playerService.pause();
    }

    next(event: Event): void {
        event.stopPropagation();
        this.playerService.next();
    }

    previous(event: Event): void {
        event.stopPropagation();
        this.playerService.previous();
    }

    private toMMSS(seconds: number): string {
        var minutes = Math.floor(seconds / 60).toString();
        if (minutes.length < 2) minutes = '0' + minutes;
        var remainderSeconds = Math.floor(seconds % 60).toString();
        if (remainderSeconds.length < 2) remainderSeconds = '0' + remainderSeconds;
        return minutes + ':' + remainderSeconds;
    }

}