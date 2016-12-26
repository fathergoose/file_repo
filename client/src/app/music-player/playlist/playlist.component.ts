import { Component, Input, OnInit, Output } from '@angular/core';
import { Track } from '../track';
import { PlayerService } from '../player.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    constructor(
        private playerService: PlayerService
    ) { }


    ngOnInit() {
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

    removeTrack(index: number, event: Event) {
        this.playerService.removeTrack(index);
    }

}
