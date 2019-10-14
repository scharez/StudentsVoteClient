import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Stimmenverteilung', cols: 1, rows: 1 },
          { title: 'Classes-Voted', cols: 1, rows: 1 },
          { title: 'Elect-Settings', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Stimmenverteilung', cols: 2, rows: 1 },
        { title: 'Classes-Voted', cols: 1, rows: 2 },
        { title: 'Elect-Settings', cols: 1, rows: 1 }

      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
