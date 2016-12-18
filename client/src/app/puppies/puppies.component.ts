import { Component, OnInit } from '@angular/core';
import { PuppiesService } from './puppies.service';
import { Puppy } from './puppy';

@Component({
    selector: 'app-puppies',
    templateUrl: './puppies.component.html',
    styleUrls: ['./puppies.component.css']
})
export class PuppiesComponent implements OnInit {
    errorMessage: string;
    puppies: Puppy[];

    constructor(private puppiesService: PuppiesService) { }

    ngOnInit() {
        this.getPuppies();
    }

    getPuppies() {
        this.puppiesService.getPuppies().subscribe(
            puppies => this.puppies = puppies,
            error => this.errorMessage = <any>error
        )
    }

}
