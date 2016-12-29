import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player/player.service';
import { AlbumsService } from './albums.service';
import { Album } from './album';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
    private errorMessage: string;
    private albums: Album[];

    constructor(
        private albumsService: AlbumsService,
        private playerService: PlayerService
    ) { }

    ngOnInit() {
        this.getAlbums();
    }

    private getAlbums() {
        this.albumsService.getAlbums().subscribe(
            tracks => this.albums = tracks,
            error => this.errorMessage = <any>error
        );
    }

}
