import {Component} from '@angular/core';

@Component({
  selector: 'file-fetch',
  template: require('./fileView.html'),
  providers: [FileProvider]
}
})
export class FileViewComponent {}