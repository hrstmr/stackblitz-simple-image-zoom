import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './main.html',
  styles: `
  #mydiv {
    overflow: auto;
    width: 100cqw;
    height: 100cqw;
    display:flex;
}
img{
  margin:auto;
}
  `,
})
export class App {
  zoom = 100;
  name = 'Angular';
  zoomIn() {
    this.zoom += 10;
  }
  zoomOut() {
    this.zoom -= 10;
  }
}

bootstrapApplication(App);
