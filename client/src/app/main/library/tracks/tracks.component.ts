import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player/player.service';
import { Track } from '../tracks/track';
import { TracksService } from '../tracks/tracks.service';

@Component({
    selector: 'app-tracks',
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
    private errorMessage: string;
    private tracks: Track[];

    constructor(
        private tracksService: TracksService,
        private playerService: PlayerService,
    ) { }

    ngOnInit() {
        this.getTracks();
    }


    addTrack(track: Track, event: Event): void {
        event.stopPropagation();
        this.playerService.addTrack(track);
    }


    private getTracks() {
        this.tracksService.getTracks().subscribe(
            tracks => this.tracks = tracks,
            error => this.errorMessage = <any>error
        );
    }

}
