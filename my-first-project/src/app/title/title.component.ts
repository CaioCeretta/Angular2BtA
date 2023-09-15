import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() public title: string = 'Welcome!';
  /* This input public title is being assigned a 'welcome' value by default, but if i go on the app component and tell
  <app-title title="Not welcome anymore"> the input is receiving a data from the outside, and it will overwrite this
  default data. This is the way we can utilize a dinamic component setting different properties
  Everytime we use a @Input at the beginning of a property, it becomes a changeable property
  */
  @Input() public subtitle: string = 'Nhi'

  constructor() {
    // No construtor é onde também ocorre a injeção de dependencia
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    /* In this example, we want the ngOnChange to tell us when the component was changed*/
    alert('Successfully changed')
  }
}
