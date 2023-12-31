import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--
    <br />

    <app-attributes-directives>
      <h1>Lessons about attribute Directives</h1>
      <hr>
    </app-attributes-directives>

    <app-attributes-directives>
      <h1>Understanding Directives</h1>
      <hr>
    </app-attributes-directives> -->
    <app-new-component></app-new-component>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
