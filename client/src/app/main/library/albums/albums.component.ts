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

    public addAlbum(album: Album) {
        if (album.tracks) {
            this.playerService.playlist.push(...album.tracks);
        } else {
          this.albumsService.getTracksFromAlbum(album).subscribe(
                tracks => {
                    album.tracks = tracks;
                    this.playerService.playlist.push(...album.tracks);
                },
                error => this.errorMessage = <any>error
            );  
        }
    };

    public expandAlbum(album: Album) {
        if (album.expanded) {
            album.expanded = false;
        } else if (album.tracks) {
            album.expanded = true;
        } else {
            this.albumsService.getTracksFromAlbum(album).subscribe(
                tracks => {
                    album.tracks = tracks;
                    album.expanded = true;
                },
                error => this.errorMessage = <any>error
            );
        }
    }

    private getAlbums() {
        this.albumsService.getAlbums().subscribe(
            albums => this.albums = albums,
            error => this.errorMessage = <any>error
        );
    }

}
