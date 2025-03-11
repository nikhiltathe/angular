import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p> Hello World </p>
    <router-outlet />
  `,
  styles: [`
    p {
      color: red;
      background-color: yellow;
    }`],
})
export class AppComponent {
  title = 'Nikhil-first-ng-all';
}
