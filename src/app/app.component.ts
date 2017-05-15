// For animation
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('anim1', [
        state('pose1', style({ transform: 'scale(1)' })),
        state('pose2', style({ transform: 'scale(1.2)' })),
        transition('small <=> large', animate('100ms ease-in')),
    ]),
  ]
})
export class AppComponent implements OnInit {

  pose: string = 'pose1';

  constructor (private data: DataService) { }

  ngOnInit() { }

  anim1() {
    console.log('I have been clicked');
    this.pose = (this.pose === 'pose1' ? 'pose2' : 'pose1'); // ternary operator
    console.log(this.data.getData());
  }
}
