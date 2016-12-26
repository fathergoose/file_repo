import { Injectable } from '@angular/core';
import { Track } from './track'

@Injectable()
export class PlayerService {

    constructor() { }
    public playlist: Track[] = [ ];
    public playing: number; // depricated, change to 'currentIndex'
    public currentIndex: number;
    // TODO: Add ended event to currentAudioElement
    private currentAudioElement: HTMLAudioElement = document.createElement('audio');
    private nextAudioElement: HTMLAudioElement = document.createElement('audio');
    private paused: Boolean = false;


    addTrack(track: Track): void {
        if (!this.playlist.length) {
            this.playing = 0;
        }
        this.playlist.push(track);
        console.log(this.playlist);
    }

    removeTrack(index: number): void {
        this.playlist.splice(index, 1);
        console.log(this.playlist);
    }

    play(): void {
        if ( !this.playlist.length ) return;
        if ( this.currentAudioElement.src && this.paused === true) { this.paused = false; return; } 

        if ( this.playing + 1 === this.playlist.length  ) {     // if wer're on the last song
            this.currentAudioElement.src = this.playlist[this.playing].url;
        } else {
            this.currentAudioElement.src = this.playlist[this.playing].url;
            this.nextAudioElement.src = this.playlist[this.playing + 1].url;
            this.currentAudioElement.onended = () => this.next();
        }
        this.currentAudioElement.play();
        console.log(this.playlist);
    }

    pause(): void {
        this.currentAudioElement.pause();
        this.paused = true;
        console.log(this.playlist);
    }

    next(): void {
        if ( this.playing + 1 < this.playlist.length ) {
        this.playing++;
        this.play();
        console.log(this.playlist);
        } else {
            this.endOfList();
        }
    }
    
    previous(): void {
        if ( this.currentAudioElement.currentTime < 1
             && this.playing > 0 ) {
            this.playing--;
            this.play();
        } else {
            this.play();
            console.log(this.playlist);
        }
    }

    private endOfList(): void {
        console.log('end');
    }

}
