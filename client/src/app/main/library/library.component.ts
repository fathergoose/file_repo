import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { Track } from './tracks/track';
import { TracksService } from './tracks/tracks.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
    private errorMessage: string;
    private tracks: Track[];
    public view: string;
    

    constructor(
        private tracksService: TracksService,
        private playerService: PlayerService,
    ) { }

    ngOnInit() {
        this.view = 'tracks';
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
