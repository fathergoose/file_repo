import { Injectable } from '@angular/core';
import { Track } from './track'

@Injectable()
export class PlayerService {

    constructor() { }
    public playlist: Track[] = [ ];
    public playing: number; // depricated, change to 'currentIndex'
    public currentIndex: number;
    // TODO: Add ended event to currentAudioElement
    public currentAudioElement: HTMLAudioElement = document.createElement('audio');
    private nextAudioElement: HTMLAudioElement = document.createElement('audio');
    private paused: boolean = false;


    addTrack(track: Track): void {
        if (!this.playlist.length) {
            this.playing = 0;
        }
        this.playlist.push(track);
    }

    removeTrack(index: number): void {
        this.playlist.splice(index, 1);
    }

    play(): void {
        if (!this.paused) this.syncList();
        this.currentAudioElement.play();
        this.paused = false;
    }

    private syncList(): void {
        if ( !this.playlist.length ) return;
        if ( this.playing + 1 === this.playlist.length ) {     // if we're on the last song
            this.currentAudioElement.src = this.playlist[this.playing].url;
        } else {
            this.currentAudioElement.src = this.playlist[this.playing].url;
            this.nextAudioElement.src = this.playlist[this.playing + 1].url;
        }
        this.currentAudioElement.onended = () => this.next();
    }

    pause(): void {
        this.currentAudioElement.pause();
        this.paused = true;
    }

    next(): void {
        if (this.playing + 1 < this.playlist.length) {
            this.playing++;
            this.syncList();
            if (!this.paused) this.play(); 
        } else {
            this.endOfList();
        }
    }
    
    previous(): void {
        if ( this.currentAudioElement.currentTime < 1
             && this.playing > 0 ) {
            this.playing--;
        }
        this.syncList();
        if (!this.paused) {
            this.play();
        }
    }

    playAtIndex(index: number) {
        this.playing = index;
        this.syncList();
        this.play();
    }

    private endOfList(): void {
        console.log('end');
    }

}
