import { Component, OnInit } from '@angular/core';
import { FilesService } from './files.service';
import { File } from './file';

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
    errorMessage: string;
    files: File[];
    mode = 'Observable';

    constructor(private fileService: FilesService) { }

    ngOnInit() {
        this.getFiles();
    }

    getFiles() {
        this.fileService.getFiles().subscribe(
            files => this.files = files,
            error => this.errorMessage = <any>error
        );
    }

}
