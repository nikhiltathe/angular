import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  styles: [`
    main {
      color: red;
      background-color: yellow;
      padding-inline: 16px;
      padding-block: 8px;
    }`],
})
export class AppComponent {
  title = 'Nikhil-first-ng-all';
}
