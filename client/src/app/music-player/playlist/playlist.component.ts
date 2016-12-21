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
  // @Output('click') removeTrack = new EventEmitter(); Figrue out the output / Event listener stuff

  ngOnInit() {
  }

}
