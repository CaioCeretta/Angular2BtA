import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behaviours-directives',
  templateUrl: './behaviours-directives.component.html',
  styleUrls: ['./behaviours-directives.component.scss']
})
export class BehavioursDirectivesComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{name: string, age: number}> = [
    {name: 'Caio', age: 27},
    {name: 'Thiago', age: 31},
    {name: 'Bruno', age: 31},

  ]

  public name: string = 'Caio'

  /* or

  public list: string[] = [
    'coco1',
    'coco2'
  ]
  */




  constructor() {

  }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 2000)
  }

  public onClick() {
    setInterval(() => {
      this.conditionClick = !this.conditionClick
    }, 2000)

  }

  public onClickAddList() {
    this.list.push({name: 'Test', age: Math.ceil(Math.random() * 50)})
  }

  public onClickEventList(id: number) {
    this.list.splice(id, 1)
  }

}
