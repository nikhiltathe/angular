import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  template: `
    <app-header />
    <app-home />
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
