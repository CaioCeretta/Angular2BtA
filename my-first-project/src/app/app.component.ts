import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Not welcome anymore" subtitle="New subtitle"></app-title>
    <router-outlet></router-outlet>
  `,
  // I removed the three files (app.component.html), (app.component.scss)
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log('1');
    }, 5000);
  }
}
