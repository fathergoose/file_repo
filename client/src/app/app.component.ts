import { Component } from '@angular/core';
import { FilesService } from './files/files.service';
import { PuppiesService } from './puppies/puppies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilesService, PuppiesService]
})
export class AppComponent {
  title = 'File repo and puppies app ;-)';
}
