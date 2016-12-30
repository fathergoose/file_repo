import { Track } from '../tracks/track';

export class Album {
    public album: string;
    public artistName: string;
    public tracks: Track[];
    public expanded: boolean = false;
}
