import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public name: string = 'Caio';
  public age: number = 27;
  public checkIfDisabled: boolean = false;
  public imgSrc: string =
    'https://media.timeout.com/images/106015066/1920/1080/image.jpg';
  public imgTitle: string = 'Italy';

  public position: {
    x: number;
    y: number;
  } = { x: 0, y: 0 };

  constructor() {}

  public alertInfo(value: MouseEvent) {
    console.log(value);
  }

  public mouseMoveTest(value: MouseEvent) {
    this.position = { x: value.offsetX, y: value.offsetY}
  }

  ngOnInit(): void {}
}

