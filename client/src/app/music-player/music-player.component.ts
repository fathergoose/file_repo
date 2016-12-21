import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Track } from './track';
import { FilesService } from '../files/files.service';

@Component({
    selector: 'app-music-player',
    templateUrl: './music-player.component.html',
    styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
    private tracks: Track[];
    private errorMessage: string;

    constructor(
        private playerService: PlayerService,
        private filesService: FilesService
    ) { }

    ngOnInit() {
        this.getTracks();
    }

    addTrack(track: Track, event: Event): void {
        event.stopPropagation();
        this.playerService.addTrack(track);
    }

    play(event: Event): void {
        event.stopPropagation();
        this.playerService.play();
    }

    pause(event: Event): void {
        event.stopPropagation();
        this.playerService.pause();
    }

    private getTracks() {
        this.filesService.getFiles().subscribe(
            files => this.tracks = files.filter( f => { return f.name.substr(f.name.length - 4) === '.mp3'; }), // grab *.mp3 files
            error => this.errorMessage = <any>error
        );
    }


}
