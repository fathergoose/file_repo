import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PuppiesService } from './puppies.service';
import { Puppy } from './puppy';


@Component({
    selector: 'app-puppies',
    templateUrl: './puppies.component.html',
    styleUrls: ['./puppies.component.css']
})
export class PuppiesComponent implements OnInit {
    puppyForm: FormGroup;
    errorMessage: string;
    puppies: Puppy[];
    selectedPuppy: Puppy;
    private pupId: string;

    constructor(
        private router: ActivatedRoute,
        private puppiesService: PuppiesService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.getPuppies();

        this.puppyForm = this.formBuilder.group({
            name: '',
            breed: '',
            age: '',
            sex: ''
        });
    }

    selectPuppy(puppy: Puppy, event: Event) {
        event.stopPropagation();
        this.selectedPuppy = puppy;
    }

    getPuppies(): void {
        this.puppiesService.getPuppies().subscribe(
            puppies => this.puppies = puppies,
            error => this.errorMessage = <any>error
        )
    }

    addPuppy(puppy: Puppy): void {
        this.puppiesService.addPuppy(this.puppyForm.value)
                               .subscribe(
                                   pup => this.puppies.push(pup),
                                   err => this.errorMessage = <any>err
                               )
    }
    removePuppy(puppy: Puppy, event: Event): void {
        event.stopPropagation();
        this.puppiesService.removePuppy(puppy)
            .subscribe(
                result => {
                    if (result.rowCount === 1) {
                        this.puppies.forEach((element, index) => {
                            if (element.id === puppy.id) {
                                this.puppies.splice(index, 1);
                            }
                        });
                    }
                },
                err => this.errorMessage = <any>err
            )
    }


}
