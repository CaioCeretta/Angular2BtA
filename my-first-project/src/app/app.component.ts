import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- {{value}} -->
    <!-- <button (click)="add()">Add!</button> -->
    <app-title *ngIf="destroy === true"></app-title>
    <br>
    <button (click)="destroyComponent()">Destroy component</button>
    <router-outlet></router-outlet>
  `,
  // I removed the three files (app.component.html), (app.component.scss)
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public value: number = 1;
  public destroy:boolean = true;

  public add(): number {
    return this.value  += 1;
  }

  public destroyComponent() {
    this.destroy = false;
  }

  constructor() {}

  // ngOnInit(): void {
  //   // setTimeout(() => {
  //   //   console.log('1');
  //   // }, 5000);
  // }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

}
