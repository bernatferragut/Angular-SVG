import { Component } from '@angular/core';

@Component({
  selector: 'app-vector-canvas',
  templateUrl: './vector-canvas.component.html',
  styleUrls: ['./vector-canvas.component.css']
})
export class VectorCanvasComponent{

  circles: any[] = [
    { x: 50, y: 50, radius: 10},
    { x: 75, y: 75, radius: 20},
    { x: 115, y: 115, radius: 30}
  ]
}
