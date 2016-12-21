import { Component } from '@angular/core';
import { FilesService } from './files/files.service';
import { PuppiesService } from './puppies/puppies.service';
import { PlayerService } from './music-player/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilesService, PuppiesService, PlayerService]
})
export class AppComponent {
  title = 'File repo and puppies app ;-)';
}
