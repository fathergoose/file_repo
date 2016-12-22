import { Injectable } from '@angular/core';
import { Track } from './track'

@Injectable()
export class PlayerService {

    constructor() { }
    public playlist: Track[] = [ ];
    private audioElement: HTMLAudioElement = document.createElement('audio');
    private current: Number;
    private paused: Boolean = false;

    addTrack(track: Track): void {
        this.playlist.push(track);
    }

    play(): void {
        if ( !this.playlist.length ) return;
        if ( this.audioElement.src ) {
            this.audioElement.play();
        } else {
            this.audioElement.src = this.playlist[0].url;
            this.audioElement.play();
        }
    }

    pause(): void {
        this.audioElement.pause();
    }

    removeTrack(index: number): void {
        this.playlist.splice(index, 1);
    }

}
