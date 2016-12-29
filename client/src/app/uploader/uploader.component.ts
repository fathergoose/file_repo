import { Component, OnInit} from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.css'],
})

export class UploaderComponent {
    uploadFile: any;
    private targetURL: string = '/api/tracks';
    private hasBaseDropZoneOver: boolean = false;
    private options: Object = {
        url: this.targetURL,
        fieldName: 'lefile'
    };
    private sizeLimit: number = 1000000000000000000;

    constructor() { }

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

    clickUploaderInput(event: Event): void {
        event.stopPropagation();
        document.getElementById('uploader-input').click();
    }
}
