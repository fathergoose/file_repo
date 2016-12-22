import { Component, Input, OnInit, Output } from '@angular/core';
import { Track } from '../track';
import { PlayerService } from '../player.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    constructor() { }

    @Input() playerService: PlayerService;

    ngOnInit() {
    }

    removeTrack(index: number, event: Event) {
        this.playerService.removeTrack(index);
    }

}
