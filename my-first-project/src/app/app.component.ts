import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <br />

    <app-behaviours-directives></app-behaviours-directives>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
