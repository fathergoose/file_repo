import { Component } from '@angular/core';
import { PlayerService } from './main/player/player.service';
import { TracksService } from './main/library/tracks/tracks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService, TracksService]
})
export class AppComponent {
  title = 'File repo and puppies app ;-)';
}
