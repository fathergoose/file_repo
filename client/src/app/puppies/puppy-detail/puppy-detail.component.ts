import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puppy } from '../puppy';
import { PuppiesService } from '../puppies.service'

@Component({
  selector: 'app-puppy-detail',
  templateUrl: './puppy-detail.component.html',
  styleUrls: ['./puppy-detail.component.css']
})
export class PuppyDetailComponent implements OnInit {
  @Input() puppy: Puppy;
  private pupId: string;

  constructor( 
    private route: ActivatedRoute,
    private puppiesService: PuppiesService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pupId = params['id'];
    });
  }

  // TODO implement a way of getting puppies pulled from the 
  // list belonging to the parent
  // removePuppy(puppy: Puppy, event: Event): void {
  //       event.stopPropagation();
  //       this.puppiesService.removePuppy(puppy)
  //           .subscribe(
  //               result => {
  //                   if (result.rowCount === 1) {
  //                       this.puppies.forEach((element, index) => {
  //                           if (element.id === puppy.id) {
  //                               this.puppies.splice(index, 1);
  //                           }
  //                       });
  //                   }
  //               },
  //               err => this.errorMessage = <any>err
  //           )
  //   }

}
