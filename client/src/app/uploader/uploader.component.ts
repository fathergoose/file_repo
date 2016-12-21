import { Component, OnInit} from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.css'],
})

export class UploaderComponent {
    constructor() { }


    uploadFile: any;
    hasBaseDropZoneOver: boolean = false;
    options: Object = {
        url: '/api/files',
        fieldName: 'lefile'

    };
    sizeLimit = 1000000000000000000;

    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }

    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    beforeUpload(uploadingFile): void {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            alert('File is too large');
        }
    }
}
