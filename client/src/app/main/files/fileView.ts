import {Component, OnInit} from '@angular/core';
import {File} from './file';
import {FileProvider} from './fileProvider'

@Component({
  selector: 'file-view',
  template: require('./fileView.html'),
  providers: [FileProvider]
})

export class FileViewComponent implements OnInit {
  errorMessage: string;
  files: File[];
  mode = 'Observable';

  constructor (private fileProvider: FileProvider) {}

  ngOnInit() { this.getFiles(); }

  getFiles() {
    this.fileProvider.getFiles()
                         .subscribe(
                            files => this.files = files,
                            error => this.errorMessage = <any>error);
  }
}