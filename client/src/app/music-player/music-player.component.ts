import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Track } from './track';
import { TracksService } from './tracks.service';

@Component({
    selector: 'app-music-player',
    templateUrl: './music-player.component.html',
    styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
    private errorMessage: string;
    private tracks: Track[];
    

    constructor(
        private tracksService: TracksService,
        private playerService: PlayerService
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
