import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
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
