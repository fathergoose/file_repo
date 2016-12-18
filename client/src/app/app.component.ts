import { Component } from '@angular/core';
import { FilesService } from './files/files.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilesService]
})
export class AppComponent {
  title = 'File repo and puppies app ;-)';
}
