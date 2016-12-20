import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puppy } from '../puppy';

@Component({
  selector: 'app-puppy-detail',
  templateUrl: './puppy-detail.component.html',
  styleUrls: ['./puppy-detail.component.css']
})
export class PuppyDetailComponent implements OnInit {
  @Input() puppy: Puppy;
  private pupId: string;

  constructor( 
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pupId = params['id'];
    });
  }

}
